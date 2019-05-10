import { AjaxRequest } from 'rxjs/ajax'

export type CreateRequestType = (input: string, apiKey: string) => AjaxRequest
