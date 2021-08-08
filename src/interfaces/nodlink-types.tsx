export type NodLink = {
    id: number
    originalUrl: string
    nodId: string
  }
  
export type NodLinksState = {
    links: NodLink[]
  }
  
export type NodLinkAction = {
    type: string
    link: NodLink
  }
  
export type DispatchType = (args: NodLinkAction) => NodLinkAction