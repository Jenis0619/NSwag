﻿//-----------------------------------------------------------------------
// <copyright file="MainWindowModel.cs" company="NSwag">
//     Copyright (c) Rico Suter. All rights reserved.
// </copyright>
// <license>https://github.com/NSwag/NSwag/blob/master/LICENSE.md</license>
// <author>Rico Suter, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System.Linq;
using System.Threading.Tasks;
using MyToolkit.Command;
using NSwagStudio.Views.ClientGenerators;
using NSwagStudio.Views.SwaggerGenerators;

namespace NSwagStudio.ViewModels
{
    /// <summary>The view model for the MainWindow.</summary>
    public class MainWindowModel : ViewModelBase
    {
        private ISwaggerGenerator _selectedSwaggerGenerator;

        private readonly ISwaggerGenerator[] _swaggerGenerators = new ISwaggerGenerator[]
        {
            new SwaggerInputGeneratorView(),
            new WebApiSwaggerGeneratorView(),
            new JsonSchemaInputGeneratorView(),
            new AssemblySwaggerGeneratorView(), 
        };

        private readonly IClientGenerator[] _clientGenerators = new IClientGenerator[]
        {
            new SwaggerGeneratorView(),
            new TypeScriptCodeGeneratorView(),
            new CSharpClientGeneratorView()
        };

        /// <summary>Initializes a new instance of the <see cref="MainWindowModel"/> class.</summary>
        public MainWindowModel()
        {
            GenerateCommand = new AsyncRelayCommand(GenerateAsync);
            SelectedSwaggerGenerator = SwaggerGenerators.First();
        }

        /// <summary>Gets or sets the command to generate code from the selected Swagger generator.</summary>
        public AsyncRelayCommand GenerateCommand { get; set; }

        /// <summary>Gets the swagger generators.</summary>
        public ISwaggerGenerator[] SwaggerGenerators { get { return _swaggerGenerators; } }

        /// <summary>Gets the client generators.</summary>
        public IClientGenerator[] ClientGenerators { get { return _clientGenerators; } }

        /// <summary>Gets or sets the selected <see cref="ISwaggerGenerator"/>. </summary>
        public ISwaggerGenerator SelectedSwaggerGenerator
        {
            get { return _selectedSwaggerGenerator; }
            set { Set(ref _selectedSwaggerGenerator, value); }
        }

        private async Task GenerateAsync()
        {
            if (SelectedSwaggerGenerator != null)
            {
                var swaggerCode = await SelectedSwaggerGenerator.GenerateSwaggerAsync();
                foreach (var generator in ClientGenerators)
                    await generator.GenerateClientAsync(swaggerCode);
            }
        }
    }
}
