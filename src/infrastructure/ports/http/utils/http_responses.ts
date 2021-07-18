export const ok = (body: any) => ({ statusCode: 200, body });
export const error = (body: any) => ({ statusCode: 500, body });
