﻿//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.0.0.0 (NJsonSchema v10.0.11.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

using System.Web.Http;

namespace MyNamespace
{
    #pragma warning disable

    [System.CodeDom.Compiler.GeneratedCode("NSwag", "13.0.0.0 (NJsonSchema v10.0.11.0 (Newtonsoft.Json v11.0.0.0))")]
    public interface IGeoController
    {
        System.Threading.Tasks.Task FromBodyTestAsync(GeoPoint location);
    
        System.Threading.Tasks.Task FromUriTestAsync(double? latitude, double? longitude);
    
        System.Threading.Tasks.Task AddPolygonAsync(System.Collections.Generic.IEnumerable<GeoPoint> points);
    
        System.Threading.Tasks.Task FilterAsync(System.Collections.Generic.IEnumerable<string> currentStates);
    
        System.Threading.Tasks.Task<System.Collections.Generic.ICollection<string>> ReverseAsync(System.Collections.Generic.IEnumerable<string> values);
    
        System.Threading.Tasks.Task RefreshAsync();
    
        System.Threading.Tasks.Task<bool> UploadFileAsync(FileParameter file);
    
        System.Threading.Tasks.Task UploadFilesAsync(System.Collections.Generic.IEnumerable<FileParameter> files);
    
        System.Threading.Tasks.Task SaveItemsAsync(GenericRequestOfAddressAndPerson request);
    
        System.Threading.Tasks.Task<FileResponse> GetUploadedFileAsync(int id, bool @override);
    
        System.Threading.Tasks.Task<double?> PostDoubleAsync(double? value);
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NSwag", "13.0.0.0 (NJsonSchema v10.0.11.0 (Newtonsoft.Json v11.0.0.0))")]
    public partial class GeoController : System.Web.Http.ApiController
    {
        private IGeoController _implementation;
    
        public GeoController(IGeoController implementation)
        {
            _implementation = implementation;
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Geo/FromBodyTest")]
        public System.Threading.Tasks.Task FromBodyTest([System.Web.Http.FromBody] GeoPoint location)
        {
            return _implementation.FromBodyTestAsync(location);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Geo/FromUriTest")]
        public System.Threading.Tasks.Task FromUriTest(double? latitude, double? longitude)
        {
            return _implementation.FromUriTestAsync(latitude, longitude);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Geo/AddPolygon")]
        public System.Threading.Tasks.Task AddPolygon([System.Web.Http.FromBody] System.Collections.Generic.IEnumerable<GeoPoint> points)
        {
            return _implementation.AddPolygonAsync(points);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Geo/Filter")]
        public System.Threading.Tasks.Task Filter(System.Collections.Generic.IEnumerable<string> currentStates)
        {
            return _implementation.FilterAsync(currentStates);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Geo/Reverse")]
        public System.Threading.Tasks.Task<System.Collections.Generic.ICollection<string>> Reverse(System.Collections.Generic.IEnumerable<string> values)
        {
            return _implementation.ReverseAsync(values);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Geo/Refresh")]
        public System.Threading.Tasks.Task Refresh()
        {
            return _implementation.RefreshAsync();
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Geo/UploadFile")]
        public System.Threading.Tasks.Task<bool> UploadFile(FileParameter file)
        {
            return _implementation.UploadFileAsync(file);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Geo/UploadFiles")]
        public System.Threading.Tasks.Task UploadFiles(System.Collections.Generic.IEnumerable<FileParameter> files)
        {
            return _implementation.UploadFilesAsync(files);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Geo/SaveItems")]
        public System.Threading.Tasks.Task SaveItems([System.Web.Http.FromBody] GenericRequestOfAddressAndPerson request)
        {
            return _implementation.SaveItemsAsync(request);
        }
    
        [System.Web.Http.HttpGet, System.Web.Http.Route("api/Geo/GetUploadedFile/{id}")]
        public System.Threading.Tasks.Task<FileResponse> GetUploadedFile(int id, bool? @override)
        {
            return _implementation.GetUploadedFileAsync(id, @override ?? false);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Geo/PostDouble")]
        public System.Threading.Tasks.Task<double?> PostDouble(double? value)
        {
            return _implementation.PostDoubleAsync(value);
        }
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NSwag", "13.0.0.0 (NJsonSchema v10.0.11.0 (Newtonsoft.Json v11.0.0.0))")]
    public interface IPersonsController
    {
        System.Threading.Tasks.Task<System.Collections.Generic.ICollection<Person>> GetAllAsync();
    
        System.Threading.Tasks.Task AddAsync(Person person);
    
        System.Threading.Tasks.Task<System.Collections.Generic.ICollection<Person>> FindAsync(Gender gender);
    
        System.Threading.Tasks.Task<System.Collections.Generic.ICollection<Person>> FindOptionalAsync(Gender? gender);
    
        System.Threading.Tasks.Task<Person> GetAsync(System.Guid id);
    
        System.Threading.Tasks.Task DeleteAsync(System.Guid id);
    
        System.Threading.Tasks.Task<Person> TransformAsync(Person person);
    
        System.Threading.Tasks.Task<Person> ThrowAsync(System.Guid id);
    
        /// <summary>Gets the name of a person.</summary>
        /// <param name="id">The person ID.</param>
        /// <returns>The person's name.</returns>
        System.Threading.Tasks.Task<string> GetNameAsync(System.Guid id);
    
        System.Threading.Tasks.Task<string> AddXmlAsync(string person);
    
        System.Threading.Tasks.Task<byte[]> UploadAsync(System.IO.Stream data);
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NSwag", "13.0.0.0 (NJsonSchema v10.0.11.0 (Newtonsoft.Json v11.0.0.0))")]
    public partial class PersonsController : System.Web.Http.ApiController
    {
        private IPersonsController _implementation;
    
        public PersonsController(IPersonsController implementation)
        {
            _implementation = implementation;
        }
    
        [System.Web.Http.HttpGet, System.Web.Http.Route("api/Persons")]
        public System.Threading.Tasks.Task<System.Collections.Generic.ICollection<Person>> GetAll()
        {
            return _implementation.GetAllAsync();
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Persons")]
        public System.Threading.Tasks.Task Add([System.Web.Http.FromBody] Person person)
        {
            return _implementation.AddAsync(person);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Persons/find/{gender}")]
        public System.Threading.Tasks.Task<System.Collections.Generic.ICollection<Person>> Find(Gender gender)
        {
            return _implementation.FindAsync(gender);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Persons/find2")]
        public System.Threading.Tasks.Task<System.Collections.Generic.ICollection<Person>> FindOptional(Gender? gender)
        {
            return _implementation.FindOptionalAsync(gender);
        }
    
        [System.Web.Http.HttpGet, System.Web.Http.Route("api/Persons/{id}")]
        public System.Threading.Tasks.Task<Person> Get(System.Guid id)
        {
            return _implementation.GetAsync(id);
        }
    
        [System.Web.Http.HttpDelete, System.Web.Http.Route("api/Persons/{id}")]
        public System.Threading.Tasks.Task Delete(System.Guid id)
        {
            return _implementation.DeleteAsync(id);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Persons/transform")]
        public System.Threading.Tasks.Task<Person> Transform([System.Web.Http.FromBody] Person person)
        {
            return _implementation.TransformAsync(person);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Persons/Throw")]
        public System.Threading.Tasks.Task<Person> Throw(System.Guid id)
        {
            return _implementation.ThrowAsync(id);
        }
    
        /// <summary>Gets the name of a person.</summary>
        /// <param name="id">The person ID.</param>
        /// <returns>The person's name.</returns>
        [System.Web.Http.HttpGet, System.Web.Http.Route("api/Persons/{id}/Name")]
        public System.Threading.Tasks.Task<string> GetName(System.Guid id)
        {
            return _implementation.GetNameAsync(id);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Persons/AddXml")]
        public System.Threading.Tasks.Task<string> AddXml([System.Web.Http.FromBody] string person)
        {
            return _implementation.AddXmlAsync(person);
        }
    
        [System.Web.Http.HttpPost, System.Web.Http.Route("api/Persons/upload")]
        public System.Threading.Tasks.Task<byte[]> Upload([System.Web.Http.FromBody] System.IO.Stream data)
        {
            return _implementation.UploadAsync(data);
        }
    
    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.0.11.0 (Newtonsoft.Json v11.0.0.0)")]
    public partial class GeoPoint : System.ComponentModel.INotifyPropertyChanged
    {
        private double _latitude;
        private double _longitude;
    
        [Newtonsoft.Json.JsonProperty("Latitude", Required = Newtonsoft.Json.Required.Always)]
        public double Latitude
        {
            get { return _latitude; }
            set 
            {
                if (_latitude != value)
                {
                    _latitude = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("Longitude", Required = Newtonsoft.Json.Required.Always)]
        public double Longitude
        {
            get { return _longitude; }
            set 
            {
                if (_longitude != value)
                {
                    _longitude = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
    
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            if (handler != null) 
                handler(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.0.11.0 (Newtonsoft.Json v11.0.0.0)")]
    public partial class GenericRequestOfAddressAndPerson : System.ComponentModel.INotifyPropertyChanged
    {
        private Address _item1;
        private Person _item2;
    
        [Newtonsoft.Json.JsonProperty("Item1", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public Address Item1
        {
            get { return _item1; }
            set 
            {
                if (_item1 != value)
                {
                    _item1 = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("Item2", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public Person Item2
        {
            get { return _item2; }
            set 
            {
                if (_item2 != value)
                {
                    _item2 = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
    
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            if (handler != null) 
                handler(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.0.11.0 (Newtonsoft.Json v11.0.0.0)")]
    public partial class Address : System.ComponentModel.INotifyPropertyChanged
    {
        private bool _isPrimary;
        private string _city;
    
        [Newtonsoft.Json.JsonProperty("IsPrimary", Required = Newtonsoft.Json.Required.Always)]
        public bool IsPrimary
        {
            get { return _isPrimary; }
            set 
            {
                if (_isPrimary != value)
                {
                    _isPrimary = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("City", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public string City
        {
            get { return _city; }
            set 
            {
                if (_city != value)
                {
                    _city = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
    
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            if (handler != null) 
                handler(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }
    
    }
    
    [Newtonsoft.Json.JsonConverter(typeof(JsonInheritanceConverter), "discriminator")]
    [JsonInheritanceAttribute("Teacher", typeof(Teacher))]
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.0.11.0 (Newtonsoft.Json v11.0.0.0)")]
    public partial class Person : System.ComponentModel.INotifyPropertyChanged
    {
        private System.Guid _id;
        private string _firstName;
        private string _lastName;
        private Gender _gender;
        private System.DateTime _dateOfBirth;
        private decimal _weight;
        private double _height;
        private int _age;
        private System.TimeSpan _averageSleepTime;
        private Address _address = new Address();
        private System.Collections.Generic.List<Person> _children = new System.Collections.Generic.List<Person>();
        private System.Collections.Generic.Dictionary<string, SkillLevel> _skills;
    
        [Newtonsoft.Json.JsonProperty("Id", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.Guid Id
        {
            get { return _id; }
            set 
            {
                if (_id != value)
                {
                    _id = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        /// <summary>Gets or sets the first name.</summary>
        [Newtonsoft.Json.JsonProperty("FirstName", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required]
        [System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 2)]
        public string FirstName
        {
            get { return _firstName; }
            set 
            {
                if (_firstName != value)
                {
                    _firstName = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        /// <summary>Gets or sets the last name.</summary>
        [Newtonsoft.Json.JsonProperty("LastName", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required]
        public string LastName
        {
            get { return _lastName; }
            set 
            {
                if (_lastName != value)
                {
                    _lastName = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("Gender", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        [Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
        public Gender Gender
        {
            get { return _gender; }
            set 
            {
                if (_gender != value)
                {
                    _gender = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("DateOfBirth", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.DateTime DateOfBirth
        {
            get { return _dateOfBirth; }
            set 
            {
                if (_dateOfBirth != value)
                {
                    _dateOfBirth = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("Weight", Required = Newtonsoft.Json.Required.Always)]
        public decimal Weight
        {
            get { return _weight; }
            set 
            {
                if (_weight != value)
                {
                    _weight = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("Height", Required = Newtonsoft.Json.Required.Always)]
        public double Height
        {
            get { return _height; }
            set 
            {
                if (_height != value)
                {
                    _height = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("Age", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Range(5, 99)]
        public int Age
        {
            get { return _age; }
            set 
            {
                if (_age != value)
                {
                    _age = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("AverageSleepTime", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.TimeSpan AverageSleepTime
        {
            get { return _averageSleepTime; }
            set 
            {
                if (_averageSleepTime != value)
                {
                    _averageSleepTime = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("Address", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required]
        public Address Address
        {
            get { return _address; }
            set 
            {
                if (_address != value)
                {
                    _address = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("Children", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required]
        public System.Collections.Generic.List<Person> Children
        {
            get { return _children; }
            set 
            {
                if (_children != value)
                {
                    _children = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("Skills", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public System.Collections.Generic.Dictionary<string, SkillLevel> Skills
        {
            get { return _skills; }
            set 
            {
                if (_skills != value)
                {
                    _skills = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
    
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            if (handler != null) 
                handler(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.0.11.0 (Newtonsoft.Json v11.0.0.0)")]
    public enum Gender
    {
        [System.Runtime.Serialization.EnumMember(Value = @"Male")]
        Male = 0,
    
        [System.Runtime.Serialization.EnumMember(Value = @"Female")]
        Female = 1,
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.0.11.0 (Newtonsoft.Json v11.0.0.0)")]
    public enum SkillLevel
    {
        Low = 0,
    
        Medium = 1,
    
        Height = 2,
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.0.11.0 (Newtonsoft.Json v11.0.0.0)")]
    public partial class Teacher : Person, System.ComponentModel.INotifyPropertyChanged
    {
        private string _course;
        private SkillLevel _skillLevel = MyNamespace.SkillLevel.Medium;
    
        [Newtonsoft.Json.JsonProperty("Course", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public string Course
        {
            get { return _course; }
            set 
            {
                if (_course != value)
                {
                    _course = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
        [Newtonsoft.Json.JsonProperty("SkillLevel", Required = Newtonsoft.Json.Required.Always)]
        public SkillLevel SkillLevel
        {
            get { return _skillLevel; }
            set 
            {
                if (_skillLevel != value)
                {
                    _skillLevel = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
    
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            if (handler != null) 
                handler(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.0.11.0 (Newtonsoft.Json v11.0.0.0)")]
    [Newtonsoft.Json.JsonObjectAttribute]
    public partial class PersonNotFoundException : System.Exception, System.ComponentModel.INotifyPropertyChanged
    {
        private System.Guid _id;
    
        [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public System.Guid Id
        {
            get { return _id; }
            set 
            {
                if (_id != value)
                {
                    _id = value; 
                    RaisePropertyChanged();
                }
            }
        }
    
    
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected virtual void RaisePropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            if (handler != null) 
                handler(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
        }
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.0.11.0 (Newtonsoft.Json v11.0.0.0)")]
    [System.AttributeUsage(System.AttributeTargets.Class, AllowMultiple = true)]
    internal class JsonInheritanceAttribute : System.Attribute
    {
        public JsonInheritanceAttribute(string key, System.Type type)
        {
            Key = key;
            Type = type;
        }
    
        public string Key { get; }
    
        public System.Type Type { get; }
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.0.11.0 (Newtonsoft.Json v11.0.0.0)")]
    internal class JsonInheritanceConverter : Newtonsoft.Json.JsonConverter
    {
        internal static readonly string DefaultDiscriminatorName = "discriminator";
    
        private readonly string _discriminator;
    
        [System.ThreadStatic]
        private static bool _isReading;
    
        [System.ThreadStatic]
        private static bool _isWriting;
    
        public JsonInheritanceConverter()
        {
            _discriminator = DefaultDiscriminatorName;
        }
    
        public JsonInheritanceConverter(string discriminator)
        {
            _discriminator = discriminator;
        }
    
        public override void WriteJson(Newtonsoft.Json.JsonWriter writer, object value, Newtonsoft.Json.JsonSerializer serializer)
        {
            try
            {
                _isWriting = true;
    
                var jObject = Newtonsoft.Json.Linq.JObject.FromObject(value, serializer);
                jObject.AddFirst(new Newtonsoft.Json.Linq.JProperty(_discriminator, GetSubtypeDiscriminator(value.GetType())));
                writer.WriteToken(jObject.CreateReader());
            }
            finally
            {
                _isWriting = false;
            }
        }
    
        public override bool CanWrite
        {
            get
            {
                if (_isWriting)
                {
                    _isWriting = false;
                    return false;
                }
                return true;
            }
        }
    
        public override bool CanRead
        {
            get
            {
                if (_isReading)
                {
                    _isReading = false;
                    return false;
                }
                return true;
            }
        }
    
        public override bool CanConvert(System.Type objectType)
        {
            return true;
        }
    
        public override object ReadJson(Newtonsoft.Json.JsonReader reader, System.Type objectType, object existingValue, Newtonsoft.Json.JsonSerializer serializer)
        {
            var jObject = serializer.Deserialize<Newtonsoft.Json.Linq.JObject>(reader);
            if (jObject == null)
                return null;
    
            var discriminator = Newtonsoft.Json.Linq.Extensions.Value<string>(jObject.GetValue(_discriminator));
            var subtype = GetObjectSubtype(objectType, discriminator);
    
            try
            {
                _isReading = true;
                return serializer.Deserialize(jObject.CreateReader(), subtype);
            }
            finally
            {
                _isReading = false;
            }
        }
    
        private System.Type GetObjectSubtype(System.Type objectType, string discriminator)
        {
            foreach (var attribute in System.Reflection.CustomAttributeExtensions.GetCustomAttributes<JsonInheritanceAttribute>(System.Reflection.IntrospectionExtensions.GetTypeInfo(objectType), true))
            {
                if (attribute.Key == discriminator)
                    return attribute.Type;
            }
    
            return objectType;
        }
    
        private string GetSubtypeDiscriminator(System.Type objectType)
        {
            foreach (var attribute in System.Reflection.CustomAttributeExtensions.GetCustomAttributes<JsonInheritanceAttribute>(System.Reflection.IntrospectionExtensions.GetTypeInfo(objectType), true))
            {
                if (attribute.Type == objectType)
                    return attribute.Key;
            }
    
            return objectType.Name;
        }
    }

    [System.CodeDom.Compiler.GeneratedCode("NSwag", "13.0.0.0 (NJsonSchema v10.0.11.0 (Newtonsoft.Json v11.0.0.0))")]
    public partial class FileParameter
    {
        public FileParameter(System.IO.Stream data)
            : this (data, null)
        {
        }

        public FileParameter(System.IO.Stream data, string fileName)
            : this (data, fileName, null)
        {
        }

        public FileParameter(System.IO.Stream data, string fileName, string contentType)
        {
            Data = data;
            FileName = fileName;
            ContentType = contentType;
        }

        public System.IO.Stream Data { get; private set; }

        public string FileName { get; private set; }

        public string ContentType { get; private set; }
    }

    public partial class FileResponse : System.IDisposable
    {
        private System.IDisposable _client; 
        private System.IDisposable _response; 

        public int StatusCode { get; private set; }

        public System.Collections.Generic.Dictionary<string, System.Collections.Generic.IEnumerable<string>> Headers { get; private set; }

        public System.IO.Stream Stream { get; private set; }

        public bool IsPartial
        {
            get { return StatusCode == 206; }
        }

        public FileResponse(int statusCode, System.Collections.Generic.Dictionary<string, System.Collections.Generic.IEnumerable<string>> headers, System.IO.Stream stream, System.IDisposable client, System.IDisposable response)
        {
            StatusCode = statusCode; 
            Headers = headers; 
            Stream = stream; 
            _client = client; 
            _response = response;
        }

        public void Dispose() 
        {
            if (Stream != null)
                Stream.Dispose();
            if (_response != null)
                _response.Dispose();
            if (_client != null)
                _client.Dispose();
        }
    }

    [System.CodeDom.Compiler.GeneratedCode("NSwag", "13.0.0.0 (NJsonSchema v10.0.11.0 (Newtonsoft.Json v11.0.0.0))")]
    internal class JsonExceptionConverter : Newtonsoft.Json.JsonConverter
    {
        private readonly Newtonsoft.Json.Serialization.DefaultContractResolver _defaultContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver();
        private readonly System.Collections.Generic.IDictionary<string, System.Reflection.Assembly> _searchedNamespaces;
        private readonly bool _hideStackTrace = false;
        
        public JsonExceptionConverter()
        {
            _searchedNamespaces = new System.Collections.Generic.Dictionary<string, System.Reflection.Assembly> { { typeof(System.Exception).Namespace, System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(System.Exception)).Assembly } };
        }
        
        public override bool CanWrite => true;
        
        public override void WriteJson(Newtonsoft.Json.JsonWriter writer, object value, Newtonsoft.Json.JsonSerializer serializer)
        {
            var exception = value as System.Exception;
            if (exception != null)
            {
                var resolver = serializer.ContractResolver as Newtonsoft.Json.Serialization.DefaultContractResolver ?? _defaultContractResolver;
        
                var jObject = new Newtonsoft.Json.Linq.JObject();
                jObject.Add(resolver.GetResolvedPropertyName("discriminator"), exception.GetType().Name);
                jObject.Add(resolver.GetResolvedPropertyName("Message"), exception.Message);
                jObject.Add(resolver.GetResolvedPropertyName("StackTrace"), _hideStackTrace ? "HIDDEN" : exception.StackTrace);
                jObject.Add(resolver.GetResolvedPropertyName("Source"), exception.Source);
                jObject.Add(resolver.GetResolvedPropertyName("InnerException"),
                    exception.InnerException != null ? Newtonsoft.Json.Linq.JToken.FromObject(exception.InnerException, serializer) : null);
        
                foreach (var property in GetExceptionProperties(value.GetType()))
                {
                    var propertyValue = property.Key.GetValue(exception);
                    if (propertyValue != null)
                    {
                        jObject.AddFirst(new Newtonsoft.Json.Linq.JProperty(resolver.GetResolvedPropertyName(property.Value),
                            Newtonsoft.Json.Linq.JToken.FromObject(propertyValue, serializer)));
                    }
                }
        
                value = jObject;
            }
        
            serializer.Serialize(writer, value);
        }
        
        public override bool CanConvert(System.Type objectType)
        {
            return System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(System.Exception)).IsAssignableFrom(System.Reflection.IntrospectionExtensions.GetTypeInfo(objectType));
        }
        
        public override object ReadJson(Newtonsoft.Json.JsonReader reader, System.Type objectType, object existingValue, Newtonsoft.Json.JsonSerializer serializer)
        {
            var jObject = serializer.Deserialize<Newtonsoft.Json.Linq.JObject>(reader);
            if (jObject == null)
                return null;
        
            var newSerializer = new Newtonsoft.Json.JsonSerializer();
            newSerializer.ContractResolver = (Newtonsoft.Json.Serialization.IContractResolver)System.Activator.CreateInstance(serializer.ContractResolver.GetType());
        
            var field = GetField(typeof(Newtonsoft.Json.Serialization.DefaultContractResolver), "_sharedCache");
            if (field != null)
                field.SetValue(newSerializer.ContractResolver, false);
        
            dynamic resolver = newSerializer.ContractResolver;
            if (System.Reflection.RuntimeReflectionExtensions.GetRuntimeProperty(newSerializer.ContractResolver.GetType(), "IgnoreSerializableAttribute") != null)
                resolver.IgnoreSerializableAttribute = true;
            if (System.Reflection.RuntimeReflectionExtensions.GetRuntimeProperty(newSerializer.ContractResolver.GetType(), "IgnoreSerializableInterface") != null)
                resolver.IgnoreSerializableInterface = true;
        
            Newtonsoft.Json.Linq.JToken token;
            if (jObject.TryGetValue("discriminator", System.StringComparison.OrdinalIgnoreCase, out token))
            {
                var discriminator = Newtonsoft.Json.Linq.Extensions.Value<string>(token);
                if (objectType.Name.Equals(discriminator) == false)
                {
                    var exceptionType = System.Type.GetType("System." + discriminator, false);
                    if (exceptionType != null)
                        objectType = exceptionType;
                    else
                    {
                        foreach (var pair in _searchedNamespaces)
                        {
                            exceptionType = pair.Value.GetType(pair.Key + "." + discriminator);
                            if (exceptionType != null)
                            {
                                objectType = exceptionType;
                                break;
                            }
                        }
        
                    }
                }
            }
        
            var value = jObject.ToObject(objectType, newSerializer);
            foreach (var property in GetExceptionProperties(value.GetType()))
            {
                var jValue = jObject.GetValue(resolver.GetResolvedPropertyName(property.Value));
                var propertyValue = (object)jValue?.ToObject(property.Key.PropertyType);
                if (property.Key.SetMethod != null)
                    property.Key.SetValue(value, propertyValue);
                else
                {
                    field = GetField(objectType, "m_" + property.Value.Substring(0, 1).ToLowerInvariant() + property.Value.Substring(1));
                    if (field != null)
                        field.SetValue(value, propertyValue);
                }
            }
        
            SetExceptionFieldValue(jObject, "Message", value, "_message", resolver, newSerializer);
            SetExceptionFieldValue(jObject, "StackTrace", value, "_stackTraceString", resolver, newSerializer);
            SetExceptionFieldValue(jObject, "Source", value, "_source", resolver, newSerializer);
            SetExceptionFieldValue(jObject, "InnerException", value, "_innerException", resolver, serializer);
        
            return value;
        }
        
        private System.Reflection.FieldInfo GetField(System.Type type, string fieldName)
        {
            var field = System.Reflection.IntrospectionExtensions.GetTypeInfo(type).GetDeclaredField(fieldName);
            if (field == null && System.Reflection.IntrospectionExtensions.GetTypeInfo(type).BaseType != null)
                return GetField(System.Reflection.IntrospectionExtensions.GetTypeInfo(type).BaseType, fieldName);
            return field;
        }
        
        private System.Collections.Generic.IDictionary<System.Reflection.PropertyInfo, string> GetExceptionProperties(System.Type exceptionType)
        {
            var result = new System.Collections.Generic.Dictionary<System.Reflection.PropertyInfo, string>();
            foreach (var property in System.Linq.Enumerable.Where(System.Reflection.RuntimeReflectionExtensions.GetRuntimeProperties(exceptionType), 
                p => p.GetMethod?.IsPublic == true))
            {
                var attribute = System.Reflection.CustomAttributeExtensions.GetCustomAttribute<Newtonsoft.Json.JsonPropertyAttribute>(property);
                var propertyName = attribute != null ? attribute.PropertyName : property.Name;
        
                if (!System.Linq.Enumerable.Contains(new[] { "Message", "StackTrace", "Source", "InnerException", "Data", "TargetSite", "HelpLink", "HResult" }, propertyName))
                    result[property] = propertyName;
            }
            return result;
        }
        
        private void SetExceptionFieldValue(Newtonsoft.Json.Linq.JObject jObject, string propertyName, object value, string fieldName, Newtonsoft.Json.Serialization.IContractResolver resolver, Newtonsoft.Json.JsonSerializer serializer)
        {
            var field = System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(System.Exception)).GetDeclaredField(fieldName);
            var jsonPropertyName = resolver is Newtonsoft.Json.Serialization.DefaultContractResolver ? ((Newtonsoft.Json.Serialization.DefaultContractResolver)resolver).GetResolvedPropertyName(propertyName) : propertyName;
            var property = System.Linq.Enumerable.FirstOrDefault(jObject.Properties(), p => System.String.Equals(p.Name, jsonPropertyName, System.StringComparison.OrdinalIgnoreCase));
            if (property != null)
            {
                var fieldValue = property.Value.ToObject(field.FieldType, serializer);
                field.SetValue(value, fieldValue);
            }
        }
    }

    #pragma warning restore
}