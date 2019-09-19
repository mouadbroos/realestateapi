export interface ErrorCode {
    Id: number;
    Description: string;
    Status: string;
    ProductName: string;
    Version: string;
}

export interface Paging {
    RecordsPerPage: number;
    CurrentPage: number;
    TotalRecords: number;
    MaxRecords: number;
    TotalPages: number;
    RecordsShowing: number;
    Pins: number;
}

export interface Building {
    BathroomTotal: string;
    Bedrooms: string;
    Type: string;
    Ammenities: string;
}

export interface Address {
    AddressText: string;
}

export interface Phone {
    PhoneType: string;
    PhoneNumber: string;
    AreaCode: string;
    PhoneTypeId: string;
}

export interface Email {
    ContactId: string;
}

export interface Website {
    Website: string;
    WebsiteTypeId: string;
}

export interface Organization {
    OrganizationID: number;
    Name: string;
    Logo: string;
    Address: Address;
    Phones: Phone[];
    Emails: Email[];
    OrganizationType: string;
    Designation: string;
    HasEmail: boolean;
    PermitFreetextEmail: boolean;
    PermitShowListingLink: boolean;
    RelativeDetailsURL: string;
    PhotoLastupdate: string;
    Websites: Website[];
}

export interface Phone2 {
    PhoneType: string;
    PhoneNumber: string;
    AreaCode: string;
    PhoneTypeId: string;
}

export interface Website2 {
    Website: string;
    WebsiteTypeId: string;
}

export interface Email2 {
    ContactId: string;
}

export interface Individual {
    IndividualID: number;
    Name: string;
    Organization: Organization;
    Phones: Phone2[];
    Websites: Website2[];
    Emails: Email2[];
    Photo: string;
    Position: string;
    PermitFreetextEmail: boolean;
    FirstName: string;
    LastName: string;
    CorporationDisplayTypeId: string;
    PermitShowListingLink: boolean;
    RelativeDetailsURL: string;
    AgentPhotoLastUpdated: string;
    DesignationCodes: string;
}

export interface Address2 {
    AddressText: string;
    Longitude: string;
    Latitude: string;
}

export interface Photo {
    SequenceId: string;
    HighResPath: string;
    MedResPath: string;
    LowResPath: string;
    LastUpdated: string;
}

export interface Parking {
    Name: string;
}

export interface Property {
    Price: string;
    Type: string;
    Address: Address2;
    Photo: Photo[];
    Parking: Parking[];
    ParkingSpaceTotal: string;
    TypeId: string;
    OwnershipType: string;
    AmmenitiesNearBy: string;
}

export interface Business {
}

export interface Land {
}

export interface AlternateURL {
    DetailsLink: string;
    BrochureLink: string;
    PhotoLink: string;
    VideoLink: string;
}

export interface Result {
    Id: string;
    MlsNumber: string;
    PublicRemarks: string;
    Building: Building;
    Individual: Individual[];
    Property: Property;
    Business: Business;
    Land: Land;
    AlternateURL: AlternateURL;
    PostalCode: string;
    RelativeDetailsURL: string;
    StatusId: string;
    PhotoChangeDateUTC: string;
    Distance: string;
    RelativeURLEn: string;
    RelativeURLFr: string;
    HasNewImageUpdate?: boolean;
}

export interface Pin {
    key: string;
    propertyId: string;
    count: number;
    longitude: string;
    latitude: string;
}

export class Response {
    ErrorCode: ErrorCode;
    Paging: Paging;
    Results: Result[];
    Pins: Pin[];
    GroupingLevel: string;
}
