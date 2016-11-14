﻿using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using NConsole;
using Newtonsoft.Json;
using NSwag.Commands.Annotations;
using NSwag.Commands.Base;

namespace NSwag.Commands
{
    /// <summary></summary>
    /// <seealso cref="NSwag.Commands.Base.OutputCommandBase" />
    public class InputToSwaggerCommand : OutputCommandBase, INotifyPropertyChanged
    {
        private string _swagger;
        private string _url;

        /// <summary>Gets or sets the input Swagger specification.</summary>
        [JsonProperty("Swagger")]
        public string Swagger
        {
            get { return _swagger; }
            set
            {
                _swagger = value;
                OnPropertyChanged();
            }
        }

        /// <summary>Gets or sets the input Swagger specification URL.</summary>
        [JsonProperty("Url")]
        public string Url
        {
            get { return _url; }
            set
            {
                _url = value;
                OnPropertyChanged();
            }
        }

        /// <summary>Runs the asynchronous.</summary>
        /// <param name="processor">The processor.</param>
        /// <param name="host">The host.</param>
        /// <returns></returns>
        public override async Task<object> RunAsync(CommandLineProcessor processor, IConsoleHost host)
        {
            return await RunAsync();
        }

        /// <summary></summary>
        public async Task<SwaggerDocument> RunAsync()
        {
            if (!string.IsNullOrEmpty(Url))
                return await Task.Run(() => SwaggerDocument.FromUrl(Url));
            else
                return await Task.Run(() => SwaggerDocument.FromJson(Swagger));
        }

        /// <summary>Occurs when property changed.</summary>
        public event PropertyChangedEventHandler PropertyChanged;

        /// <summary>Called when property changed.</summary>
        [NotifyPropertyChangedInvocator]
        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}