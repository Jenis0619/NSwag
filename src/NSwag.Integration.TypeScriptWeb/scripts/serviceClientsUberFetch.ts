﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.17.6.0 (NJsonSchema v9.10.46.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class Client {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "https://api.uber.com/v1";
    }

    /**
     * Product Types
     * @latitude Latitude component of location.
     * @longitude Longitude component of location.
     * @return An array of products
     */
    products(latitude: number, longitude: number): Promise<Product[]> {
        let url_ = this.baseUrl + "/products?";
        if (latitude === undefined || latitude === null)
            throw new Error("The parameter 'latitude' must be defined and cannot be null.");
        else
            url_ += "latitude=" + encodeURIComponent("" + latitude) + "&"; 
        if (longitude === undefined || longitude === null)
            throw new Error("The parameter 'longitude' must be defined and cannot be null.");
        else
            url_ += "longitude=" + encodeURIComponent("" + longitude) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processProducts(_response);
        });
    }

    protected processProducts(response: Response): Promise<Product[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Product.fromJS(item));
            }
            return result200;
            });
        } else {
            return response.text().then((_responseText) => {
            let resultdefault: any = null;
            let resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result = resultData ? ErrorDto.fromJS(resultData) : <any>null;
            return throwException("A server error occurred.", status, _responseText, _headers, resultdefault);
            });
        }
    }

    /**
     * Price Estimates
     * @start_latitude Latitude component of start location.
     * @start_longitude Longitude component of start location.
     * @end_latitude Latitude component of end location.
     * @end_longitude Longitude component of end location.
     * @return An array of price estimates by product
     */
    price(start_latitude: number, start_longitude: number, end_latitude: number, end_longitude: number): Promise<PriceEstimate[]> {
        let url_ = this.baseUrl + "/estimates/price?";
        if (start_latitude === undefined || start_latitude === null)
            throw new Error("The parameter 'start_latitude' must be defined and cannot be null.");
        else
            url_ += "start_latitude=" + encodeURIComponent("" + start_latitude) + "&"; 
        if (start_longitude === undefined || start_longitude === null)
            throw new Error("The parameter 'start_longitude' must be defined and cannot be null.");
        else
            url_ += "start_longitude=" + encodeURIComponent("" + start_longitude) + "&"; 
        if (end_latitude === undefined || end_latitude === null)
            throw new Error("The parameter 'end_latitude' must be defined and cannot be null.");
        else
            url_ += "end_latitude=" + encodeURIComponent("" + end_latitude) + "&"; 
        if (end_longitude === undefined || end_longitude === null)
            throw new Error("The parameter 'end_longitude' must be defined and cannot be null.");
        else
            url_ += "end_longitude=" + encodeURIComponent("" + end_longitude) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPrice(_response);
        });
    }

    protected processPrice(response: Response): Promise<PriceEstimate[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(PriceEstimate.fromJS(item));
            }
            return result200;
            });
        } else {
            return response.text().then((_responseText) => {
            let resultdefault: any = null;
            let resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result = resultData ? ErrorDto.fromJS(resultData) : <any>null;
            return throwException("A server error occurred.", status, _responseText, _headers, resultdefault);
            });
        }
    }

    /**
     * Time Estimates
     * @start_latitude Latitude component of start location.
     * @start_longitude Longitude component of start location.
     * @customer_uuid (optional) Unique customer identifier to be used for experience customization.
     * @product_id (optional) Unique identifier representing a specific product for a given latitude & longitude.
     * @return An array of products
     */
    time(start_latitude: number, start_longitude: number, customer_uuid: string | null | undefined, product_id: string | null | undefined): Promise<Product[]> {
        let url_ = this.baseUrl + "/estimates/time?";
        if (start_latitude === undefined || start_latitude === null)
            throw new Error("The parameter 'start_latitude' must be defined and cannot be null.");
        else
            url_ += "start_latitude=" + encodeURIComponent("" + start_latitude) + "&"; 
        if (start_longitude === undefined || start_longitude === null)
            throw new Error("The parameter 'start_longitude' must be defined and cannot be null.");
        else
            url_ += "start_longitude=" + encodeURIComponent("" + start_longitude) + "&"; 
        if (customer_uuid !== undefined)
            url_ += "customer_uuid=" + encodeURIComponent("" + customer_uuid) + "&"; 
        if (product_id !== undefined)
            url_ += "product_id=" + encodeURIComponent("" + product_id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTime(_response);
        });
    }

    protected processTime(response: Response): Promise<Product[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Product.fromJS(item));
            }
            return result200;
            });
        } else {
            return response.text().then((_responseText) => {
            let resultdefault: any = null;
            let resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result = resultData ? ErrorDto.fromJS(resultData) : <any>null;
            return throwException("A server error occurred.", status, _responseText, _headers, resultdefault);
            });
        }
    }

    /**
     * User Profile
     * @return Profile information for a user
     */
    me(): Promise<Profile> {
        let url_ = this.baseUrl + "/me";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMe(_response);
        });
    }

    protected processMe(response: Response): Promise<Profile> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Profile.fromJS(resultData200) : <any>null;
            return result200;
            });
        } else {
            return response.text().then((_responseText) => {
            let resultdefault: any = null;
            let resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result = resultData ? ErrorDto.fromJS(resultData) : <any>null;
            return throwException("A server error occurred.", status, _responseText, _headers, resultdefault);
            });
        }
    }

    /**
     * User Activity
     * @offset (optional) Offset the list of returned results by this amount. Default is zero.
     * @limit (optional) Number of items to retrieve. Default is 5, maximum is 100.
     * @return History information for the given user
     */
    history(offset: number | null | undefined, limit: number | null | undefined): Promise<Activities> {
        let url_ = this.baseUrl + "/history?";
        if (offset !== undefined)
            url_ += "offset=" + encodeURIComponent("" + offset) + "&"; 
        if (limit !== undefined)
            url_ += "limit=" + encodeURIComponent("" + limit) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processHistory(_response);
        });
    }

    protected processHistory(response: Response): Promise<Activities> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Activities.fromJS(resultData200) : <any>null;
            return result200;
            });
        } else {
            return response.text().then((_responseText) => {
            let resultdefault: any = null;
            let resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result = resultData ? ErrorDto.fromJS(resultData) : <any>null;
            return throwException("A server error occurred.", status, _responseText, _headers, resultdefault);
            });
        }
    }
}

export class Product implements IProduct {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. */
    product_id: string | undefined;
    /** Description of product. */
    description: string | undefined;
    /** Display name of product. */
    display_name: string | undefined;
    /** Capacity of product. For example, 4 people. */
    capacity: string | undefined;
    /** Image URL representing the product. */
    image: string | undefined;

    constructor(data?: IProduct) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.product_id = data["product_id"];
            this.description = data["description"];
            this.display_name = data["display_name"];
            this.capacity = data["capacity"];
            this.image = data["image"];
        }
    }

    static fromJS(data: any): Product {
        data = typeof data === 'object' ? data : {};
        let result = new Product();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["product_id"] = this.product_id;
        data["description"] = this.description;
        data["display_name"] = this.display_name;
        data["capacity"] = this.capacity;
        data["image"] = this.image;
        return data; 
    }
}

export interface IProduct {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. */
    product_id: string | undefined;
    /** Description of product. */
    description: string | undefined;
    /** Display name of product. */
    display_name: string | undefined;
    /** Capacity of product. For example, 4 people. */
    capacity: string | undefined;
    /** Image URL representing the product. */
    image: string | undefined;
}

export class PriceEstimate implements IPriceEstimate {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles */
    product_id: string | undefined;
    /** [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code. */
    currency_code: string | undefined;
    /** Display name of product. */
    display_name: string | undefined;
    /** Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI. */
    estimate: string | undefined;
    /** Lower bound of the estimated price. */
    low_estimate: number | undefined;
    /** Upper bound of the estimated price. */
    high_estimate: number | undefined;
    /** Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier. */
    surge_multiplier: number | undefined;

    constructor(data?: IPriceEstimate) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.product_id = data["product_id"];
            this.currency_code = data["currency_code"];
            this.display_name = data["display_name"];
            this.estimate = data["estimate"];
            this.low_estimate = data["low_estimate"];
            this.high_estimate = data["high_estimate"];
            this.surge_multiplier = data["surge_multiplier"];
        }
    }

    static fromJS(data: any): PriceEstimate {
        data = typeof data === 'object' ? data : {};
        let result = new PriceEstimate();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["product_id"] = this.product_id;
        data["currency_code"] = this.currency_code;
        data["display_name"] = this.display_name;
        data["estimate"] = this.estimate;
        data["low_estimate"] = this.low_estimate;
        data["high_estimate"] = this.high_estimate;
        data["surge_multiplier"] = this.surge_multiplier;
        return data; 
    }
}

export interface IPriceEstimate {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles */
    product_id: string | undefined;
    /** [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code. */
    currency_code: string | undefined;
    /** Display name of product. */
    display_name: string | undefined;
    /** Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI. */
    estimate: string | undefined;
    /** Lower bound of the estimated price. */
    low_estimate: number | undefined;
    /** Upper bound of the estimated price. */
    high_estimate: number | undefined;
    /** Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier. */
    surge_multiplier: number | undefined;
}

export class Profile implements IProfile {
    /** First name of the Uber user. */
    first_name: string | undefined;
    /** Last name of the Uber user. */
    last_name: string | undefined;
    /** Email address of the Uber user */
    email: string | undefined;
    /** Image URL of the Uber user. */
    picture: string | undefined;
    /** Promo code of the Uber user. */
    promo_code: string | undefined;

    constructor(data?: IProfile) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.first_name = data["first_name"];
            this.last_name = data["last_name"];
            this.email = data["email"];
            this.picture = data["picture"];
            this.promo_code = data["promo_code"];
        }
    }

    static fromJS(data: any): Profile {
        data = typeof data === 'object' ? data : {};
        let result = new Profile();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["first_name"] = this.first_name;
        data["last_name"] = this.last_name;
        data["email"] = this.email;
        data["picture"] = this.picture;
        data["promo_code"] = this.promo_code;
        return data; 
    }
}

export interface IProfile {
    /** First name of the Uber user. */
    first_name: string | undefined;
    /** Last name of the Uber user. */
    last_name: string | undefined;
    /** Email address of the Uber user */
    email: string | undefined;
    /** Image URL of the Uber user. */
    picture: string | undefined;
    /** Promo code of the Uber user. */
    promo_code: string | undefined;
}

export class Activity implements IActivity {
    /** Unique identifier for the activity */
    uuid: string | undefined;

    constructor(data?: IActivity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.uuid = data["uuid"];
        }
    }

    static fromJS(data: any): Activity {
        data = typeof data === 'object' ? data : {};
        let result = new Activity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["uuid"] = this.uuid;
        return data; 
    }
}

export interface IActivity {
    /** Unique identifier for the activity */
    uuid: string | undefined;
}

export class Activities implements IActivities {
    /** Position in pagination. */
    offset: number | undefined;
    /** Number of items to retrieve (100 max). */
    limit: number | undefined;
    /** Total number of items available. */
    count: number | undefined;
    history: Activity[] | undefined;

    constructor(data?: IActivities) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.offset = data["offset"];
            this.limit = data["limit"];
            this.count = data["count"];
            if (data["history"] && data["history"].constructor === Array) {
                this.history = [];
                for (let item of data["history"])
                    this.history.push(Activity.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Activities {
        data = typeof data === 'object' ? data : {};
        let result = new Activities();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["offset"] = this.offset;
        data["limit"] = this.limit;
        data["count"] = this.count;
        if (this.history && this.history.constructor === Array) {
            data["history"] = [];
            for (let item of this.history)
                data["history"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IActivities {
    /** Position in pagination. */
    offset: number | undefined;
    /** Number of items to retrieve (100 max). */
    limit: number | undefined;
    /** Total number of items available. */
    count: number | undefined;
    history: Activity[] | undefined;
}

export class ErrorDto implements IErrorDto {
    code: number | undefined;
    message: string | undefined;
    fields: string | undefined;

    constructor(data?: IErrorDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.code = data["code"];
            this.message = data["message"];
            this.fields = data["fields"];
        }
    }

    static fromJS(data: any): ErrorDto {
        data = typeof data === 'object' ? data : {};
        let result = new ErrorDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code;
        data["message"] = this.message;
        data["fields"] = this.fields;
        return data; 
    }
}

export interface IErrorDto {
    code: number | undefined;
    message: string | undefined;
    fields: string | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    throw new SwaggerException(message, status, response, headers, result);
}