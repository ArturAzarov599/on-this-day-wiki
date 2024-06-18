export interface IWikiResponse {
  onthisday: IOnthisday[];
}

export interface IOnthisday {
  text: string;
  pages: IPage[];
  year: number;
}

export interface IPage {
  type: string;
  title: string;
  displaytitle: string;
  namespace: INamespace;
  wikibase_item: string;
  titles: ITitles;
  pageid: number;
  thumbnail?: IThumbnail;
  originalimage?: IOriginalImage;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  coordinates?: ICoordinates;
  content_urls: IContentUrls;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
}

export interface INamespace {
  id: number;
  text: string;
}

export interface ITitles {
  canonical: string;
  normalized: string;
  display: string;
}

export interface IThumbnail {
  source: string;
  width: number;
  height: number;
}

export interface IOriginalImage {
  source: string;
  width: number;
  height: number;
}

export interface ICoordinates {
  lat: number;
  lon: number;
}

export interface IContentUrls {
  desktop: IDesktop;
  mobile: IMobile;
}

export interface IDesktop {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface IMobile {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface IEvent {
  id: string;
  name: string;
  year: number;
}

export interface IGetEventsRequestParams {
  searchCondition: string;
  accessToken: string;
}
