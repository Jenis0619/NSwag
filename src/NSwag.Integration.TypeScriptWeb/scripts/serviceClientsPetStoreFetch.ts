﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v8.8.6234.42084 (NJsonSchema v7.9.6234.40167) (http://NSwag.org)
// </auto-generated>
//----------------------


export class Client {
    private baseUrl: string; 
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.baseUrl = baseUrl ? baseUrl : "";
        this.http = http ? http : window;
    }

    /**
     * Add a new pet to the store
     * @body Pet object that needs to be added to the store
     */
    addPet(body: Pet): Promise<void> {
        let url_ = this.baseUrl + "/pet";

        const content_ = JSON.stringify(body ? body.toJS() : null);
        return this.http.fetch(url_, {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processAddPet(response);
        });
    }

    protected processAddPet(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 405) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Update an existing pet
     * @body Pet object that needs to be added to the store
     */
    updatePet(body: Pet): Promise<void> {
        let url_ = this.baseUrl + "/pet";

        const content_ = JSON.stringify(body ? body.toJS() : null);
        return this.http.fetch(url_, {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processUpdatePet(response);
        });
    }

    protected processUpdatePet(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status === 405) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Finds Pets by status
     * @status Status values that need to be considered for filter
     * @return successful operation
     */
    findPetsByStatus(status: Status[]): Promise<Pet[]> {
        let url_ = this.baseUrl + "/pet/findByStatus?";
        if (status === undefined || status === null)
            throw new Error("The parameter 'status' must be defined and cannot be null.");
        else
            status.forEach(item => { url_ += "status=" + encodeURIComponent("" + item) + "&"; });

        return this.http.fetch(url_, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processFindPetsByStatus(response);
        });
    }

    protected processFindPetsByStatus(response: Response): Promise<Pet[]> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: Pet[] = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Pet.fromJS(item));
                }
                return result200;
            } else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Finds Pets by tags
     * @tags Tags to filter by
     * @return successful operation
     * @deprecated
     */
    findPetsByTags(tags: string[]): Promise<Pet[]> {
        let url_ = this.baseUrl + "/pet/findByTags?";
        if (tags === undefined || tags === null)
            throw new Error("The parameter 'tags' must be defined and cannot be null.");
        else
            tags.forEach(item => { url_ += "tags=" + encodeURIComponent("" + item) + "&"; });

        return this.http.fetch(url_, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processFindPetsByTags(response);
        });
    }

    protected processFindPetsByTags(response: Response): Promise<Pet[]> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: Pet[] = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Pet.fromJS(item));
                }
                return result200;
            } else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Find pet by ID
     * @petId ID of pet to return
     * @return successful operation
     */
    getPetById(petId: number): Promise<Pet> {
        let url_ = this.baseUrl + "/pet/{petId}";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId));

        return this.http.fetch(url_, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processGetPetById(response);
        });
    }

    protected processGetPetById(response: Response): Promise<Pet> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: Pet = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? Pet.fromJS(resultData200) : new Pet();
                return result200;
            } else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Updates a pet in the store with form data
     * @petId ID of pet that needs to be updated
     * @name Updated name of the pet
     * @status Updated status of the pet
     */
    updatePetWithForm(petId: number, name: string, status: string): Promise<void> {
        let url_ = this.baseUrl + "/pet/{petId}";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId));

        const content_ = new FormData();
        if (name !== null)
            content_.append("name", name.toString());
        if (status !== null)
            content_.append("status", status.toString());
        return this.http.fetch(url_, {
            body: content_,
            method: "POST",
            headers: {
                'Content-Type': undefined
            }
        }).then((response) => {
            return this.processUpdatePetWithForm(response);
        });
    }

    protected processUpdatePetWithForm(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 405) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Deletes a pet
     * @petId Pet id to delete
     */
    deletePet(api_key: string, petId: number): Promise<void> {
        let url_ = this.baseUrl + "/pet/{petId}";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId));

        const content_ = "";
        return this.http.fetch(url_, {
            body: content_,
            method: "DELETE",
            headers: {
                "api_key": api_key, 
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processDeletePet(response);
        });
    }

    protected processDeletePet(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * uploads an image
     * @petId ID of pet to update
     * @additionalMetadata Additional data to pass to server
     * @file file to upload
     * @return successful operation
     */
    uploadFile(petId: number, additionalMetadata: string, file: FileParameter): Promise<ApiResponse> {
        let url_ = this.baseUrl + "/pet/{petId}/uploadImage";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId));

        const content_ = new FormData();
        if (additionalMetadata !== null)
            content_.append("additionalMetadata", additionalMetadata.toString());
        if (file !== null)
            content_.append("file", file.data, file.fileName ? file.fileName : "file");
        return this.http.fetch(url_, {
            body: content_,
            method: "POST",
            headers: {
                'Content-Type': undefined
            }
        }).then((response) => {
            return this.processUploadFile(response);
        });
    }

    protected processUploadFile(response: Response): Promise<ApiResponse> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: ApiResponse = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? ApiResponse.fromJS(resultData200) : new ApiResponse();
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Returns pet inventories by status
     * @return successful operation
     */
    getInventory(): Promise<{ [key: string] : number; }> {
        let url_ = this.baseUrl + "/store/inventory";

        return this.http.fetch(url_, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processGetInventory(response);
        });
    }

    protected processGetInventory(response: Response): Promise<{ [key: string] : number; }> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: { [key: string] : number; } = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200) {
                    result200 = {};
                    for (let key in resultData200) {
                        if (resultData200.hasOwnProperty(key))
                            result200[key] = resultData200[key] !== undefined ? resultData200[key] : {};
                    }
                }
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Place an order for a pet
     * @body order placed for purchasing the pet
     * @return successful operation
     */
    placeOrder(body: Order): Promise<Order> {
        let url_ = this.baseUrl + "/store/order";

        const content_ = JSON.stringify(body ? body.toJS() : null);
        return this.http.fetch(url_, {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processPlaceOrder(response);
        });
    }

    protected processPlaceOrder(response: Response): Promise<Order> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: Order = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? Order.fromJS(resultData200) : new Order();
                return result200;
            } else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Find purchase order by ID
     * @orderId ID of pet that needs to be fetched
     * @return successful operation
     */
    getOrderById(orderId: number): Promise<Order> {
        let url_ = this.baseUrl + "/store/order/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));

        return this.http.fetch(url_, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processGetOrderById(response);
        });
    }

    protected processGetOrderById(response: Response): Promise<Order> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: Order = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? Order.fromJS(resultData200) : new Order();
                return result200;
            } else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Delete purchase order by ID
     * @orderId ID of the order that needs to be deleted
     */
    deleteOrder(orderId: number): Promise<void> {
        let url_ = this.baseUrl + "/store/order/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));

        const content_ = "";
        return this.http.fetch(url_, {
            body: content_,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processDeleteOrder(response);
        });
    }

    protected processDeleteOrder(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Create user
     * @body Created user object
     * @return successful operation
     */
    createUser(body: User): Promise<void> {
        let url_ = this.baseUrl + "/user";

        const content_ = JSON.stringify(body ? body.toJS() : null);
        return this.http.fetch(url_, {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processCreateUser(response);
        });
    }

    protected processCreateUser(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            {
                return null;
            }
        });
    }

    /**
     * Creates list of users with given input array
     * @body List of user object
     * @return successful operation
     */
    createUsersWithArrayInput(body: User[]): Promise<void> {
        let url_ = this.baseUrl + "/user/createWithArray";

        let contentData_: any = [];
        if (body) {
            for (let item of body)
                contentData_.push(item.toJS());
        }
        const content_ = JSON.stringify(body ? contentData_ : null);
        return this.http.fetch(url_, {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processCreateUsersWithArrayInput(response);
        });
    }

    protected processCreateUsersWithArrayInput(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            {
                return null;
            }
        });
    }

    /**
     * Creates list of users with given input array
     * @body List of user object
     * @return successful operation
     */
    createUsersWithListInput(body: User[]): Promise<void> {
        let url_ = this.baseUrl + "/user/createWithList";

        let contentData_: any = [];
        if (body) {
            for (let item of body)
                contentData_.push(item.toJS());
        }
        const content_ = JSON.stringify(body ? contentData_ : null);
        return this.http.fetch(url_, {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processCreateUsersWithListInput(response);
        });
    }

    protected processCreateUsersWithListInput(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            {
                return null;
            }
        });
    }

    /**
     * Logs user into the system
     * @username The user name for login
     * @password The password for login in clear text
     * @return successful operation
     */
    loginUser(username: string, password: string): Promise<string> {
        let url_ = this.baseUrl + "/user/login?";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined and cannot be null.");
        else
            url_ += "username=" + encodeURIComponent("" + username) + "&"; 
        
        if (password === undefined || password === null)
            throw new Error("The parameter 'password' must be defined and cannot be null.");
        else
            url_ += "password=" + encodeURIComponent("" + password) + "&";

        return this.http.fetch(url_, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processLoginUser(response);
        });
    }

    protected processLoginUser(response: Response): Promise<string> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: string = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            } else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Logs out current logged in user session
     * @return successful operation
     */
    logoutUser(): Promise<void> {
        let url_ = this.baseUrl + "/user/logout";

        return this.http.fetch(url_, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processLogoutUser(response);
        });
    }

    protected processLogoutUser(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            {
                return null;
            }
        });
    }

    /**
     * Get user by user name
     * @username The name that needs to be fetched. Use user1 for testing.
     * @return successful operation
     */
    getUserByName(username: string): Promise<User> {
        let url_ = this.baseUrl + "/user/{username}";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined.");
        url_ = url_.replace("{username}", encodeURIComponent("" + username));

        return this.http.fetch(url_, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processGetUserByName(response);
        });
    }

    protected processGetUserByName(response: Response): Promise<User> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: User = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? User.fromJS(resultData200) : new User();
                return result200;
            } else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Updated user
     * @username name that need to be updated
     * @body Updated user object
     */
    updateUser(username: string, body: User): Promise<void> {
        let url_ = this.baseUrl + "/user/{username}";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined.");
        url_ = url_.replace("{username}", encodeURIComponent("" + username));

        const content_ = JSON.stringify(body ? body.toJS() : null);
        return this.http.fetch(url_, {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processUpdateUser(response);
        });
    }

    protected processUpdateUser(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Delete user
     * @username The name that needs to be deleted
     */
    deleteUser(username: string): Promise<void> {
        let url_ = this.baseUrl + "/user/{username}";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined.");
        url_ = url_.replace("{username}", encodeURIComponent("" + username));

        const content_ = "";
        return this.http.fetch(url_, {
            body: content_,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            return this.processDeleteUser(response);
        });
    }

    protected processDeleteUser(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    protected throwException(message: string, status: number, response: string, result?: any): any {
        if(result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    }
}

export class Order { 
    id: number; 
    petId: number; 
    quantity: number; 
    shipDate: Date; 
    /** Order Status */
    status: OrderStatus; 
    complete: boolean = false;
    constructor(data?: any) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
            this.petId = data["petId"] !== undefined ? data["petId"] : undefined;
            this.quantity = data["quantity"] !== undefined ? data["quantity"] : undefined;
            this.shipDate = data["shipDate"] ? new Date(data["shipDate"].toString()) : undefined;
            this.status = data["status"] !== undefined ? data["status"] : undefined;
            this.complete = data["complete"] !== undefined ? data["complete"] : false;
        }
    }

    static fromJS(data: any): Order {
        return new Order(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        data["petId"] = this.petId !== undefined ? this.petId : undefined;
        data["quantity"] = this.quantity !== undefined ? this.quantity : undefined;
        data["shipDate"] = this.shipDate ? this.shipDate.toISOString() : undefined;
        data["status"] = this.status !== undefined ? this.status : undefined;
        data["complete"] = this.complete !== undefined ? this.complete : false;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new Order(JSON.parse(json));
    }
}

export class Category { 
    id: number; 
    name: string;
    constructor(data?: any) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
            this.name = data["name"] !== undefined ? data["name"] : undefined;
        }
    }

    static fromJS(data: any): Category {
        return new Category(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        data["name"] = this.name !== undefined ? this.name : undefined;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new Category(JSON.parse(json));
    }
}

export class User { 
    id: number; 
    username: string; 
    firstName: string; 
    lastName: string; 
    email: string; 
    password: string; 
    phone: string; 
    /** User Status */
    userStatus: number;
    constructor(data?: any) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
            this.username = data["username"] !== undefined ? data["username"] : undefined;
            this.firstName = data["firstName"] !== undefined ? data["firstName"] : undefined;
            this.lastName = data["lastName"] !== undefined ? data["lastName"] : undefined;
            this.email = data["email"] !== undefined ? data["email"] : undefined;
            this.password = data["password"] !== undefined ? data["password"] : undefined;
            this.phone = data["phone"] !== undefined ? data["phone"] : undefined;
            this.userStatus = data["userStatus"] !== undefined ? data["userStatus"] : undefined;
        }
    }

    static fromJS(data: any): User {
        return new User(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        data["username"] = this.username !== undefined ? this.username : undefined;
        data["firstName"] = this.firstName !== undefined ? this.firstName : undefined;
        data["lastName"] = this.lastName !== undefined ? this.lastName : undefined;
        data["email"] = this.email !== undefined ? this.email : undefined;
        data["password"] = this.password !== undefined ? this.password : undefined;
        data["phone"] = this.phone !== undefined ? this.phone : undefined;
        data["userStatus"] = this.userStatus !== undefined ? this.userStatus : undefined;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new User(JSON.parse(json));
    }
}

export class Tag { 
    id: number; 
    name: string;
    constructor(data?: any) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
            this.name = data["name"] !== undefined ? data["name"] : undefined;
        }
    }

    static fromJS(data: any): Tag {
        return new Tag(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        data["name"] = this.name !== undefined ? this.name : undefined;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new Tag(JSON.parse(json));
    }
}

export class Pet { 
    id: number; 
    category: Category; 
    name: string; 
    photoUrls: string[] = []; 
    tags: Tag[]; 
    /** pet status in the store */
    status: PetStatus;
    constructor(data?: any) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
            this.category = data["category"] ? Category.fromJS(data["category"]) : undefined;
            this.name = data["name"] !== undefined ? data["name"] : undefined;
            if (data["photoUrls"] && data["photoUrls"].constructor === Array) {
                this.photoUrls = [];
                for (let item of data["photoUrls"])
                    this.photoUrls.push(item);
            }
            if (data["tags"] && data["tags"].constructor === Array) {
                this.tags = [];
                for (let item of data["tags"])
                    this.tags.push(Tag.fromJS(item));
            }
            this.status = data["status"] !== undefined ? data["status"] : undefined;
        }
    }

    static fromJS(data: any): Pet {
        return new Pet(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        data["category"] = this.category ? this.category.toJS() : undefined;
        data["name"] = this.name !== undefined ? this.name : undefined;
        if (this.photoUrls && this.photoUrls.constructor === Array) {
            data["photoUrls"] = [];
            for (let item of this.photoUrls)
                data["photoUrls"].push(item);
        }
        if (this.tags && this.tags.constructor === Array) {
            data["tags"] = [];
            for (let item of this.tags)
                data["tags"].push(item.toJS());
        }
        data["status"] = this.status !== undefined ? this.status : undefined;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new Pet(JSON.parse(json));
    }
}

export class ApiResponse { 
    code: number; 
    type: string; 
    message: string;
    constructor(data?: any) {
        if (data !== undefined) {
            this.code = data["code"] !== undefined ? data["code"] : undefined;
            this.type = data["type"] !== undefined ? data["type"] : undefined;
            this.message = data["message"] !== undefined ? data["message"] : undefined;
        }
    }

    static fromJS(data: any): ApiResponse {
        return new ApiResponse(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["code"] = this.code !== undefined ? this.code : undefined;
        data["type"] = this.type !== undefined ? this.type : undefined;
        data["message"] = this.message !== undefined ? this.message : undefined;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new ApiResponse(JSON.parse(json));
    }
}

export enum Status {
    Available = <any>"available", 
    Pending = <any>"pending", 
    Sold = <any>"sold", 
}

export enum OrderStatus {
    Placed = <any>"placed", 
    Approved = <any>"approved", 
    Delivered = <any>"delivered", 
}

export enum PetStatus {
    Available = <any>"available", 
    Pending = <any>"pending", 
    Sold = <any>"sold", 
}

export interface FileParameter
{
    data: any;
    fileName: string;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    result?: any; 

    constructor(message: string, status: number, response: string, result?: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}