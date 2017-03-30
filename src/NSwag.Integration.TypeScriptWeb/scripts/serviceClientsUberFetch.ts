﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v9.12.6296.40416 (NJsonSchema v8.19.6295.40470) (http://NSwag.org)
// </auto-generated>
//----------------------


export class Client {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.baseUrl = baseUrl ? baseUrl : "";
        this.http = http ? http : <any>window;
    }

    /**
     * Product Types
     * @latitude Latitude component of location.
     * @longitude Longitude component of location.
     * @return An array of products
     */
    products(latitude: number, longitude: number) {
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
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processProducts(_response);
        });
    }

    protected processProducts(_response: Response) {
        return _response.text().then((_responseText) => {
            const _status = _response.status;
            if (_status === 200) {
                let result200: Product[] | null = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Product.fromJS(item));
                }
                return result200;
            } else {
                let result: ErrorDto | null = null;
                let resultData = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result = resultData ? ErrorDto.fromJS(resultData) : null;
                this.throwException("A server error occurred.", _status, _responseText, result);
            }
        });
    }

    /**
     * Price Estimates
     * @start_latitude Latitude component of start location.
     * @start_longitude Longitude component of start location.
     * @end_latitude Latitude component of end location.
     * @end_longitude Longitude component of end location.
     * @return An array of price estimates by product
     */
    price(start_latitude: number, start_longitude: number, end_latitude: number, end_longitude: number) {
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
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPrice(_response);
        });
    }

    protected processPrice(_response: Response) {
        return _response.text().then((_responseText) => {
            const _status = _response.status;
            if (_status === 200) {
                let result200: PriceEstimate[] | null = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(PriceEstimate.fromJS(item));
                }
                return result200;
            } else {
                let result: ErrorDto | null = null;
                let resultData = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result = resultData ? ErrorDto.fromJS(resultData) : null;
                this.throwException("A server error occurred.", _status, _responseText, result);
            }
        });
    }

    /**
     * Time Estimates
     * @start_latitude Latitude component of start location.
     * @start_longitude Longitude component of start location.
     * @customer_uuid Unique customer identifier to be used for experience customization.
     * @product_id Unique identifier representing a specific product for a given latitude & longitude.
     * @return An array of products
     */
    time(start_latitude: number, start_longitude: number, customer_uuid: string, product_id: string) {
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
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTime(_response);
        });
    }

    protected processTime(_response: Response) {
        return _response.text().then((_responseText) => {
            const _status = _response.status;
            if (_status === 200) {
                let result200: Product[] | null = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Product.fromJS(item));
                }
                return result200;
            } else {
                let result: ErrorDto | null = null;
                let resultData = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result = resultData ? ErrorDto.fromJS(resultData) : null;
                this.throwException("A server error occurred.", _status, _responseText, result);
            }
        });
    }

    /**
     * User Profile
     * @return Profile information for a user
     */
    me() {
        let url_ = this.baseUrl + "/me";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMe(_response);
        });
    }

    protected processMe(_response: Response) {
        return _response.text().then((_responseText) => {
            const _status = _response.status;
            if (_status === 200) {
                let result200: Profile | null = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? Profile.fromJS(resultData200) : null;
                return result200;
            } else {
                let result: ErrorDto | null = null;
                let resultData = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result = resultData ? ErrorDto.fromJS(resultData) : null;
                this.throwException("A server error occurred.", _status, _responseText, result);
            }
        });
    }

    /**
     * User Activity
     * @offset Offset the list of returned results by this amount. Default is zero.
     * @limit Number of items to retrieve. Default is 5, maximum is 100.
     * @return History information for the given user
     */
    history(offset: number, limit: number) {
        let url_ = this.baseUrl + "/history?";
        if (offset !== undefined)
            url_ += "offset=" + encodeURIComponent("" + offset) + "&"; 
        if (limit !== undefined)
            url_ += "limit=" + encodeURIComponent("" + limit) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processHistory(_response);
        });
    }

    protected processHistory(_response: Response) {
        return _response.text().then((_responseText) => {
            const _status = _response.status;
            if (_status === 200) {
                let result200: Activities | null = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? Activities.fromJS(resultData200) : null;
                return result200;
            } else {
                let result: ErrorDto | null = null;
                let resultData = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result = resultData ? ErrorDto.fromJS(resultData) : null;
                this.throwException("A server error occurred.", _status, _responseText, result);
            }
        });
    }

    protected throwException(message: string, status: number, response: string, result?: any): any {
        throw new SwaggerException(message, status, response, result);
    }
}

export class Product {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. */
    product_id: string | null | undefined;
    /** Description of product. */
    description: string | null | undefined;
    /** Display name of product. */
    display_name: string | null | undefined;
    /** Capacity of product. For example, 4 people. */
    capacity: string | null | undefined;
    /** Image URL representing the product. */
    image: string | null | undefined;

    init(data?: any) {
        if (data !== undefined) {
            this.product_id = data["product_id"];
            this.description = data["description"];
            this.display_name = data["display_name"];
            this.capacity = data["capacity"];
            this.image = data["image"];
        }
    }

    static fromJS(data: any): Product {
        let result = new Product();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["product_id"] = this.product_id;
        data["description"] = this.description;
        data["display_name"] = this.display_name;
        data["capacity"] = this.capacity;
        data["image"] = this.image;
        return data; 
    }
}

export class PriceEstimate {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles */
    product_id: string | null | undefined;
    /** [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code. */
    currency_code: string | null | undefined;
    /** Display name of product. */
    display_name: string | null | undefined;
    /** Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI. */
    estimate: string | null | undefined;
    /** Lower bound of the estimated price. */
    low_estimate: number | null | undefined;
    /** Upper bound of the estimated price. */
    high_estimate: number | null | undefined;
    /** Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier. */
    surge_multiplier: number | null | undefined;

    init(data?: any) {
        if (data !== undefined) {
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
        let result = new PriceEstimate();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
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

export class Profile {
    /** First name of the Uber user. */
    first_name: string | null | undefined;
    /** Last name of the Uber user. */
    last_name: string | null | undefined;
    /** Email address of the Uber user */
    email: string | null | undefined;
    /** Image URL of the Uber user. */
    picture: string | null | undefined;
    /** Promo code of the Uber user. */
    promo_code: string | null | undefined;

    init(data?: any) {
        if (data !== undefined) {
            this.first_name = data["first_name"];
            this.last_name = data["last_name"];
            this.email = data["email"];
            this.picture = data["picture"];
            this.promo_code = data["promo_code"];
        }
    }

    static fromJS(data: any): Profile {
        let result = new Profile();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["first_name"] = this.first_name;
        data["last_name"] = this.last_name;
        data["email"] = this.email;
        data["picture"] = this.picture;
        data["promo_code"] = this.promo_code;
        return data; 
    }
}

export class Activity {
    /** Unique identifier for the activity */
    uuid: string | null | undefined;

    init(data?: any) {
        if (data !== undefined) {
            this.uuid = data["uuid"];
        }
    }

    static fromJS(data: any): Activity {
        let result = new Activity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["uuid"] = this.uuid;
        return data; 
    }
}

export class Activities {
    /** Position in pagination. */
    offset: number | null | undefined;
    /** Number of items to retrieve (100 max). */
    limit: number | null | undefined;
    /** Total number of items available. */
    count: number | null | undefined;
    history: Activity[] | null | undefined;

    init(data?: any) {
        if (data !== undefined) {
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
        let result = new Activities();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
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

export class ErrorDto {
    code: number | null | undefined;
    message: string | null | undefined;
    fields: string | null | undefined;

    init(data?: any) {
        if (data !== undefined) {
            this.code = data["code"];
            this.message = data["message"];
            this.fields = data["fields"];
        }
    }

    static fromJS(data: any): ErrorDto {
        let result = new ErrorDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["code"] = this.code;
        data["message"] = this.message;
        data["fields"] = this.fields;
        return data; 
    }
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    result: any; 

    constructor(message: string, status: number, response: string, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}