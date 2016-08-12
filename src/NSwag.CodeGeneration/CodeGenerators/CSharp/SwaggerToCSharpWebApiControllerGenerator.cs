﻿//-----------------------------------------------------------------------
// <copyright file="SwaggerToCSharpWebApiControllerGenerator.cs" company="NSwag">
//     Copyright (c) Rico Suter. All rights reserved.
// </copyright>
// <license>https://github.com/NSwag/NSwag/blob/master/LICENSE.md</license>
// <author>Rico Suter, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using NSwag.CodeGeneration.CodeGenerators.Models;

namespace NSwag.CodeGeneration.CodeGenerators.CSharp
{
    /// <summary>Generates the CSharp service client code. </summary>
    public class SwaggerToCSharpWebApiControllerGenerator : SwaggerToCSharpGeneratorBase
    {
        private readonly SwaggerService _service;

        /// <summary>Initializes a new instance of the <see cref="SwaggerToCSharpWebApiControllerGenerator" /> class.</summary>
        /// <param name="service">The service.</param>
        /// <param name="settings">The settings.</param>
        /// <exception cref="System.ArgumentNullException">service</exception>
        /// <exception cref="ArgumentNullException"><paramref name="service" /> is <see langword="null" />.</exception>
        public SwaggerToCSharpWebApiControllerGenerator(SwaggerService service, SwaggerToCSharpWebApiControllerGeneratorSettings settings)
            : base(service, settings)
        {
            if (service == null)
                throw new ArgumentNullException(nameof(service));

            Settings = settings;

            _service = service;
            foreach (var definition in _service.Definitions.Where(p => string.IsNullOrEmpty(p.Value.TypeNameRaw)))
                definition.Value.TypeNameRaw = definition.Key;
        }

        /// <summary>Gets or sets the generator settings.</summary>
        public SwaggerToCSharpWebApiControllerGeneratorSettings Settings { get; set; }

        /// <summary>Gets the language.</summary>
        protected override string Language => "CSharp";

        internal override ClientGeneratorBaseSettings BaseSettings => Settings;

        /// <summary>Generates the file.</summary>
        /// <returns>The file contents.</returns>
        public override string GenerateFile()
        {
            return GenerateFile(_service, Resolver, ClientGeneratorOutputType.Full);
        }

        internal override string GenerateClientClass(string controllerName, IList<OperationModel> operations, ClientGeneratorOutputType outputType)
        {
            var hasClientBaseClass = !string.IsNullOrEmpty(Settings.ControllerBaseClass);

            var model = new // TODO: Add typed class
            {
                Class = controllerName,
                BaseClass = Settings.ControllerBaseClass,

                HasBaseClass = hasClientBaseClass,
                BaseUrl = _service.BaseUrl,

                HasOperations = operations.Any(),
                Operations = operations
            };

            var template = Settings.CodeGeneratorSettings.TemplateFactory.CreateTemplate("CSharp", "Controller", model);
            return template.Render();
        }
    }
}
