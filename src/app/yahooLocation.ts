/*
export class YahooLocation {
    count: string;
    created: string;
    lang: string;
    results: Place[];
}

class Place {
    name: string;
    woeid: string;
}
*/
//declare module namespace {

    export class Place {
        name: string;
        woeid: string;
    }

    export class Results {
        place: Place;
    }

    export class Query {
        count: number;
        created: Date;
        lang: string;
        results: Results;
    }

    export class YahooLocation {
        query: Query;
    }

//}

