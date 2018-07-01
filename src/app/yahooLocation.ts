    export class Country {
        code: string;
        type: string;
        woeid: string;
        content: string;
    }

    export class Place {
        name: string;
        country: Country;
        woeid: string;
    }

    export class Results {
        place: Place[];
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


