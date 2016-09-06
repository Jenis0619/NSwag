﻿//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v5.4.6093.2339 (http://NSwag.org)
// </auto-generated>
//----------------------

using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Runtime.Serialization;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;

namespace NSwag.Integration.WebAPI
{
    #pragma warning disable // Disable all warnings

    [GeneratedCode("NSwag", "5.4.6093.2339")]
    public partial class PersonsClient 
    {
        public PersonsClient() : this("http://localhost:13452") { }
    
        public PersonsClient(string baseUrl)
        {
            BaseUrl = baseUrl; 
        }
    
        partial void PrepareRequest(HttpClient request, ref string url);
    
        partial void ProcessResponse(HttpClient request, HttpResponseMessage response);
    
        public string BaseUrl { get; set; }
    
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public Task<ObservableCollection<Person>> GetAllAsync()
        {
            return GetAllAsync(CancellationToken.None);
        }
    
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public async Task<ObservableCollection<Person>> GetAllAsync(CancellationToken cancellationToken)
        {
            var url_ = string.Format("{0}/{1}", BaseUrl, "api/Persons");
    
            var client_ = new HttpClient();
            PrepareRequest(client_, ref url_);
    
            var response_ = await client_.GetAsync(url_, cancellationToken).ConfigureAwait(false);
            ProcessResponse(client_, response_);
    
            var responseData_ = await response_.Content.ReadAsByteArrayAsync().ConfigureAwait(false); 
            var status_ = ((int)response_.StatusCode).ToString();
    
            if (status_ == "200") 
            {
                var result_ = default(ObservableCollection<Person>); 
                try
                {
                    if (responseData_.Length > 0)
                        result_ = JsonConvert.DeserializeObject<ObservableCollection<Person>>(Encoding.UTF8.GetString(responseData_, 0, responseData_.Length));                                
                    return result_; 
                } 
                catch (Exception exception) 
                {
                    throw new SwaggerException("Could not deserialize the response body.", status_, responseData_, exception);
                }
            }
            else
            {
            }
    
            throw new SwaggerException("The HTTP status code of the response was not expected (" + (int)response_.StatusCode + ").", status_, responseData_, null);
        }
    
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public Task AddAsync(Person person)
        {
            return AddAsync(person, CancellationToken.None);
        }
    
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public async Task AddAsync(Person person, CancellationToken cancellationToken)
        {
            var url_ = string.Format("{0}/{1}", BaseUrl, "api/Persons");
    
            var client_ = new HttpClient();
            PrepareRequest(client_, ref url_);
    
            var content_ = new StringContent(JsonConvert.SerializeObject(person));
            content_.Headers.ContentType.MediaType = "application/json";
    
            var response_ = await client_.PostAsync(url_, content_, cancellationToken).ConfigureAwait(false);
            ProcessResponse(client_, response_);
    
            var responseData_ = await response_.Content.ReadAsByteArrayAsync().ConfigureAwait(false); 
            var status_ = ((int)response_.StatusCode).ToString();
    
            if (status_ == "204") 
            {
                return;     
     
            }
            else
            {
            }
    
            throw new SwaggerException("The HTTP status code of the response was not expected (" + (int)response_.StatusCode + ").", status_, responseData_, null);
        }
    
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public Task<Person> GetAsync(Guid id)
        {
            return GetAsync(id, CancellationToken.None);
        }
    
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public async Task<Person> GetAsync(Guid id, CancellationToken cancellationToken)
        {
            var url_ = string.Format("{0}/{1}", BaseUrl, "api/Persons/{id}");
    
            if (id == null)
                throw new ArgumentNullException("id");
            url_ = url_.Replace("{id}", Uri.EscapeUriString(id.ToString()));
    
            var client_ = new HttpClient();
            PrepareRequest(client_, ref url_);
    
            var response_ = await client_.GetAsync(url_, cancellationToken).ConfigureAwait(false);
            ProcessResponse(client_, response_);
    
            var responseData_ = await response_.Content.ReadAsByteArrayAsync().ConfigureAwait(false); 
            var status_ = ((int)response_.StatusCode).ToString();
    
            if (status_ == "200") 
            {
                var result_ = default(Person); 
                try
                {
                    if (responseData_.Length > 0)
                        result_ = JsonConvert.DeserializeObject<Person>(Encoding.UTF8.GetString(responseData_, 0, responseData_.Length));                                
                    return result_; 
                } 
                catch (Exception exception) 
                {
                    throw new SwaggerException("Could not deserialize the response body.", status_, responseData_, exception);
                }
            }
            else
            if (status_ == "500") 
            {
                var result_ = default(PersonNotFoundException); 
                try
                {
                    if (responseData_.Length > 0)
                        result_ = JsonConvert.DeserializeObject<PersonNotFoundException>(Encoding.UTF8.GetString(responseData_, 0, responseData_.Length));                                
                } 
                catch (Exception exception) 
                {
                    throw new SwaggerException("Could not deserialize the response body.", status_, responseData_, exception);
                }
                if (result_ == null)
                    result_ = new PersonNotFoundException();
                result_.Data.Add("HttpStatus", status_);
                result_.Data.Add("ResponseData", Encoding.UTF8.GetString(responseData_, 0, responseData_.Length));
                throw result_;
            }
            else
            {
            }
    
            throw new SwaggerException("The HTTP status code of the response was not expected (" + (int)response_.StatusCode + ").", status_, responseData_, null);
        }
    
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public Task DeleteAsync(Guid id)
        {
            return DeleteAsync(id, CancellationToken.None);
        }
    
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public async Task DeleteAsync(Guid id, CancellationToken cancellationToken)
        {
            var url_ = string.Format("{0}/{1}", BaseUrl, "api/Persons/{id}");
    
            if (id == null)
                throw new ArgumentNullException("id");
            url_ = url_.Replace("{id}", Uri.EscapeUriString(id.ToString()));
    
            var client_ = new HttpClient();
            PrepareRequest(client_, ref url_);
    
            var response_ = await client_.DeleteAsync(url_, cancellationToken).ConfigureAwait(false);
            ProcessResponse(client_, response_);
    
            var responseData_ = await response_.Content.ReadAsByteArrayAsync().ConfigureAwait(false); 
            var status_ = ((int)response_.StatusCode).ToString();
    
            if (status_ == "204") 
            {
                return;     
     
            }
            else
            {
            }
    
            throw new SwaggerException("The HTTP status code of the response was not expected (" + (int)response_.StatusCode + ").", status_, responseData_, null);
        }
    
        /// <summary>Gets the name of a person.</summary>
        /// <param name="id">The person ID.</param>
        /// <returns>The person's name.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public Task<string> GetNameAsync(Guid id)
        {
            return GetNameAsync(id, CancellationToken.None);
        }
    
        /// <summary>Gets the name of a person.</summary>
        /// <param name="id">The person ID.</param>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        /// <returns>The person's name.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public async Task<string> GetNameAsync(Guid id, CancellationToken cancellationToken)
        {
            var url_ = string.Format("{0}/{1}", BaseUrl, "api/Persons/{id}/Name");
    
            if (id == null)
                throw new ArgumentNullException("id");
            url_ = url_.Replace("{id}", Uri.EscapeUriString(id.ToString()));
    
            var client_ = new HttpClient();
            PrepareRequest(client_, ref url_);
    
            var response_ = await client_.GetAsync(url_, cancellationToken).ConfigureAwait(false);
            ProcessResponse(client_, response_);
    
            var responseData_ = await response_.Content.ReadAsByteArrayAsync().ConfigureAwait(false); 
            var status_ = ((int)response_.StatusCode).ToString();
    
            if (status_ == "200") 
            {
                var result_ = default(string); 
                try
                {
                    if (responseData_.Length > 0)
                        result_ = JsonConvert.DeserializeObject<string>(Encoding.UTF8.GetString(responseData_, 0, responseData_.Length));                                
                    return result_; 
                } 
                catch (Exception exception) 
                {
                    throw new SwaggerException("Could not deserialize the response body.", status_, responseData_, exception);
                }
            }
            else
            if (status_ == "500") 
            {
                var result_ = default(PersonNotFoundException); 
                try
                {
                    if (responseData_.Length > 0)
                        result_ = JsonConvert.DeserializeObject<PersonNotFoundException>(Encoding.UTF8.GetString(responseData_, 0, responseData_.Length));                                
                } 
                catch (Exception exception) 
                {
                    throw new SwaggerException("Could not deserialize the response body.", status_, responseData_, exception);
                }
                if (result_ == null)
                    result_ = new PersonNotFoundException();
                result_.Data.Add("HttpStatus", status_);
                result_.Data.Add("ResponseData", Encoding.UTF8.GetString(responseData_, 0, responseData_.Length));
                throw result_;
            }
            else
            {
            }
    
            throw new SwaggerException("The HTTP status code of the response was not expected (" + (int)response_.StatusCode + ").", status_, responseData_, null);
        }
    
    }
    
    [GeneratedCode("NSwag", "5.4.6093.2339")]
    public partial class GeoClient 
    {
        public GeoClient() : this("http://localhost:13452") { }
    
        public GeoClient(string baseUrl)
        {
            BaseUrl = baseUrl; 
        }
    
        partial void PrepareRequest(HttpClient request, ref string url);
    
        partial void ProcessResponse(HttpClient request, HttpResponseMessage response);
    
        public string BaseUrl { get; set; }
    
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public Task FromBodyTestAsync(GeoPoint location)
        {
            return FromBodyTestAsync(location, CancellationToken.None);
        }
    
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public async Task FromBodyTestAsync(GeoPoint location, CancellationToken cancellationToken)
        {
            var url_ = string.Format("{0}/{1}", BaseUrl, "api/Geo/FromBodyTest");
    
            var client_ = new HttpClient();
            PrepareRequest(client_, ref url_);
    
            var content_ = new StringContent(JsonConvert.SerializeObject(location));
            content_.Headers.ContentType.MediaType = "application/json";
    
            var response_ = await client_.PostAsync(url_, content_, cancellationToken).ConfigureAwait(false);
            ProcessResponse(client_, response_);
    
            var responseData_ = await response_.Content.ReadAsByteArrayAsync().ConfigureAwait(false); 
            var status_ = ((int)response_.StatusCode).ToString();
    
            if (status_ == "204") 
            {
                return;     
     
            }
            else
            {
            }
    
            throw new SwaggerException("The HTTP status code of the response was not expected (" + (int)response_.StatusCode + ").", status_, responseData_, null);
        }
    
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public Task FromUriTestAsync(double? latitude, double? longitude)
        {
            return FromUriTestAsync(latitude, longitude, CancellationToken.None);
        }
    
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public async Task FromUriTestAsync(double? latitude, double? longitude, CancellationToken cancellationToken)
        {
            var url_ = string.Format("{0}/{1}?", BaseUrl, "api/Geo/FromUriTest");
    
            if (latitude == null)
                throw new ArgumentNullException("latitude");
            else
                url_ += string.Format("Latitude={0}&", Uri.EscapeUriString(latitude.Value.ToString()));
    
            if (longitude == null)
                throw new ArgumentNullException("longitude");
            else
                url_ += string.Format("Longitude={0}&", Uri.EscapeUriString(longitude.Value.ToString()));
    
            var client_ = new HttpClient();
            PrepareRequest(client_, ref url_);
    
            var content_ = new StringContent(string.Empty);
            
            var response_ = await client_.PostAsync(url_, content_, cancellationToken).ConfigureAwait(false);
            ProcessResponse(client_, response_);
    
            var responseData_ = await response_.Content.ReadAsByteArrayAsync().ConfigureAwait(false); 
            var status_ = ((int)response_.StatusCode).ToString();
    
            if (status_ == "204") 
            {
                return;     
     
            }
            else
            {
            }
    
            throw new SwaggerException("The HTTP status code of the response was not expected (" + (int)response_.StatusCode + ").", status_, responseData_, null);
        }
    
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public Task AddPolygonAsync(IEnumerable<GeoPoint> points)
        {
            return AddPolygonAsync(points, CancellationToken.None);
        }
    
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        public async Task AddPolygonAsync(IEnumerable<GeoPoint> points, CancellationToken cancellationToken)
        {
            var url_ = string.Format("{0}/{1}", BaseUrl, "api/Geo/AddPolygon");
    
            var client_ = new HttpClient();
            PrepareRequest(client_, ref url_);
    
            var content_ = new StringContent(JsonConvert.SerializeObject(points));
            content_.Headers.ContentType.MediaType = "application/json";
    
            var response_ = await client_.PostAsync(url_, content_, cancellationToken).ConfigureAwait(false);
            ProcessResponse(client_, response_);
    
            var responseData_ = await response_.Content.ReadAsByteArrayAsync().ConfigureAwait(false); 
            var status_ = ((int)response_.StatusCode).ToString();
    
            if (status_ == "204") 
            {
                return;     
     
            }
            else
            {
            }
    
            throw new SwaggerException("The HTTP status code of the response was not expected (" + (int)response_.StatusCode + ").", status_, responseData_, null);
        }
    
    }
    
    

    [JsonConverter(typeof(JsonInheritanceConverter), "discriminator")]
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "4.5.6091.37159")]
    public partial class Person 
    {
    
        [JsonProperty("Id", Required = Required.Always)]
        [Required]
        public Guid Id { get; set; }
    
        /// <summary>Gets or sets the first name.</summary>
        [JsonProperty("FirstName", Required = Required.Always)]
        [Required]
        public string FirstName { get; set; }
    
        /// <summary>Gets or sets the last name.</summary>
        [JsonProperty("LastName", Required = Required.Always)]
        [Required]
        public string LastName { get; set; }
    
        [JsonProperty("Gender", Required = Required.Always)]
        [Required]
        [JsonConverter(typeof(StringEnumConverter))]
        public Gender Gender { get; set; }
    
        [JsonProperty("DateOfBirth", Required = Required.Always)]
        [Required]
        public DateTime DateOfBirth { get; set; }
    
        [JsonProperty("Weight", Required = Required.Always)]
        public decimal Weight { get; set; }
    
        [JsonProperty("Height", Required = Required.Always)]
        public double Height { get; set; }
    
        [JsonProperty("Age", Required = Required.Always)]
        public int Age { get; set; }
    
        [JsonProperty("Address", Required = Required.Always)]
        [Required]
        public Address Address { get; set; } = new Address();
    
        [JsonProperty("Children", Required = Required.Always)]
        [Required]
        public ObservableCollection<Person> Children { get; set; } = new ObservableCollection<Person>();
    
        [JsonProperty("Skills", Required = Required.Default, NullValueHandling = NullValueHandling.Ignore)]
        public Dictionary<string, SkillLevel> Skills { get; set; }
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this);
        }
        
        public static Person FromJson(string data)
        {
            return JsonConvert.DeserializeObject<Person>(data);
        }
    }
    
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "4.5.6091.37159")]
    public partial class Teacher : Person
    {
    
        [JsonProperty("Course", Required = Required.Default, NullValueHandling = NullValueHandling.Ignore)]
        public string Course { get; set; }
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this);
        }
        
        public static Teacher FromJson(string data)
        {
            return JsonConvert.DeserializeObject<Teacher>(data);
        }
    }
    
    [GeneratedCode("NJsonSchema", "4.5.6091.37159")]
    public enum Gender
    {
        [EnumMember(Value = "Male")]
        Male = 0,
    
        [EnumMember(Value = "Female")]
        Female = 1,
    
    }
    
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "4.5.6091.37159")]
    public partial class Address 
    {
    
        [JsonProperty("IsPrimary", Required = Required.Always)]
        public bool IsPrimary { get; set; }
    
        [JsonProperty("City", Required = Required.Default, NullValueHandling = NullValueHandling.Ignore)]
        public string City { get; set; }
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this);
        }
        
        public static Address FromJson(string data)
        {
            return JsonConvert.DeserializeObject<Address>(data);
        }
    }
    
    [GeneratedCode("NJsonSchema", "4.5.6091.37159")]
    public enum SkillLevel
    {
        Low = 0,
    
        Medium = 1,
    
        Height = 2,
    
    }
    
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "4.5.6091.37159")]
    public partial class PersonNotFoundException : Exception
    {
    
        [JsonProperty("id", Required = Required.Always)]
        [Required]
        public Guid Id { get; set; }
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this);
        }
        
        public static PersonNotFoundException FromJson(string data)
        {
            return JsonConvert.DeserializeObject<PersonNotFoundException>(data);
        }
    }
    
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "4.5.6091.37159")]
    public partial class GeoPoint 
    {
    
        [JsonProperty("Latitude", Required = Required.Always)]
        public double Latitude { get; set; }
    
        [JsonProperty("Longitude", Required = Required.Always)]
        public double Longitude { get; set; }
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this);
        }
        
        public static GeoPoint FromJson(string data)
        {
            return JsonConvert.DeserializeObject<GeoPoint>(data);
        }
    }
    
    internal class JsonInheritanceConverter : JsonConverter
    {
        internal static readonly string DefaultDiscriminatorName = "discriminator";
    
        private readonly string _discriminator;
    
        public JsonInheritanceConverter()
        {
            _discriminator = DefaultDiscriminatorName;
        }
    
        public JsonInheritanceConverter(string discriminator)
        {
            _discriminator = discriminator;
        }
    
        public override bool CanWrite => true;
    
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var contract = serializer.ContractResolver.ResolveContract(value.GetType());
            contract.Converter = null;
    
            var jObject = JObject.FromObject(value, serializer);
            jObject.AddFirst(new JProperty(_discriminator, value.GetType().Name));
            writer.WriteToken(jObject.CreateReader());
    
            contract.Converter = this;
        }
    
        public override bool CanConvert(Type objectType)
        {
            return true;
        }
    
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            var jObject = serializer.Deserialize<JObject>(reader);
            var discriminator = jObject.GetValue(_discriminator).Value<string>();
            var subtype = GetObjectSubtype(objectType, discriminator);
    
            var contract = serializer.ContractResolver.ResolveContract(subtype);
            contract.Converter = null;
            var value = serializer.Deserialize(jObject.CreateReader(), subtype);
            contract.Converter = this;
            return value;
        }
    
        private Type GetObjectSubtype(Type objectType, string discriminator)
        {
            var knownTypeAttributes = objectType.GetTypeInfo().GetCustomAttributes().Where(a => a.GetType().Name == "KnownTypeAttribute");
            dynamic knownTypeAttribute = knownTypeAttributes.SingleOrDefault(a => IsKnwonTypeTargetType(a, discriminator));
            if (knownTypeAttribute != null)
                return knownTypeAttribute.Type;
    
            var typeName = objectType.Namespace + "." + discriminator;
            return objectType.GetTypeInfo().Assembly.GetType(typeName);
        }
    
        private bool IsKnwonTypeTargetType(dynamic attribute, string discriminator)
        {
            return attribute?.Type.Name == discriminator;
        }
    }

    [GeneratedCode("NSwag", "5.4.6093.2339")]
    public class SwaggerException : Exception
    {
        public string StatusCode { get; private set; }

        public byte[] ResponseData { get; private set; }

        public SwaggerException(string message, string statusCode, byte[] responseData, Exception innerException) 
            : base(message, innerException)
        {
            StatusCode = statusCode;
            ResponseData = responseData;
        }

        public override string ToString()
        {
            return string.Format("HTTP Response: n{0}n{1}", Encoding.UTF8.GetString(ResponseData, 0, ResponseData.Length), base.ToString());
        }
    }

    [GeneratedCode("NSwag", "5.4.6093.2339")]
    public class SwaggerException<TResponse> : SwaggerException
    {
        public TResponse Response { get; private set; }

        public SwaggerException(string message, string statusCode, byte[] responseData, TResponse response, Exception innerException) 
            : base(message, statusCode, responseData, innerException)
        {
            Response = response;
        }
    }

}