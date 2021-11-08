
import { Server, Request, ResponseToolkit } from "@hapi/hapi";

export function router(server: Server) {

    /**
     * Entry point
     * 
     * Nothing to do here.
     * 
     */
    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, h: ResponseToolkit) => {
            return {
                message: 'Welcome to MockOn!'
            };
        }
    });

    /**
     * Retrieve an schema
     * 
     * API action to retrieve an instance of NeDB Schema.
     * 
     */
    server.route({
        method: 'GET',
        path: '/schema/{schemaName}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { params } = request;
            const { schemaName } = params;

            // Do the acction

            return {};
        }
    });

    /**
     * Setting up schema
     * 
     * API action to create an instance of NeDB Schema.
     * 
     */
    server.route({
        method: 'POST',
        path: '/schema/{schemaName}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { params } = request;
            const { schemaName } = params;

            // Do the acction

            return {};
        }
    });

    /**
     * Update schema
     * 
     * API action to update an instance of NeDB Schema.
     * 
     */
    server.route({
        method: 'PATCH',
        path: '/schema/{schemaName}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { params } = request;
            const { schemaName } = params;

            // Do the acction

            return {};
        }
    });

    /**
     * Delete schema
     * 
     * API action to delete an instance of NeDB Schema.
     * 
     */
    server.route({
        method: 'DELETE',
        path: '/schema/{schemaName}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { params } = request;
            const { schemaName } = params;

            // Do the acction

            return {};
        }
    });

    /**
     * Query records in schema
     * 
     * Retrieve records from schema DB instance.
     * 
     */
    server.route({
        method: 'GET',
        path: '/record/{schemaName}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { params } = request;
            const { schemaName } = params;

            // Do the acction

            return {};
        }
    });

    /**
     * Insert record into schema
     * 
     * Save new record into schema DB instance.
     * 
     */
    server.route({
        method: 'POST',
        path: '/record/{schemaName}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { params } = request;
            const { schemaName } = params;

            // Do the acction

            return {};
        }
    });

    /**
     * Find record in schema by ID
     * 
     * Retrieve single record from schema DB instance by id.
     * 
     */
    server.route({
        method: 'GET',
        path: '/record/{schemaName}/{mockId}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { params } = request;
            const { schemaName, id } = params;

            // Do the acction

            return {};
        }
    });

    /**
     * Update record in schema by ID
     * 
     * Replace single record from schema DB instance by id.
     * 
     */
    server.route({
        method: 'PATCH',
        path: '/record/{schemaName}/{mockId}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { params } = request;
            const { schemaName, id } = params;

            // Do the acction

            return {};
        }
    });

    /**
     * Delete record in schema by ID
     * 
     * Delete single record from schema DB instance by id.
     * 
     */
    server.route({
        method: 'DELETE',
        path: '/record/{schemaName}/{mockId}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { params } = request;
            const { schemaName, id } = params;

            // Do the acction

            return {};
        }
    });

}