import Contentstack from 'contentstack'
import { Entry } from "./interface";
const Stack = Contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY as string,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN as string,
  environment: process.env.CONTENTSTACK_ENVIRONMENT as string,
});
export async function fetchEntries(): Promise<Entry> {
  const result: Entry = await Stack
    .ContentType(process.env.CONTENTSTACK_CONTENT_TYPE as string)
    .Entry(process.env.CONTENTSTACK_ENTRY_UID as string)
    .toJSON().fetch();
  return result;
}

export async function fetchAsset(): Promise<any> {
  try{
    const result = await Stack.Assets(process.env.CONTENTSTACK_ASSET_UID as string).toJSON().fetch();
    return result;
  }catch(e){
    return {}
  }
}