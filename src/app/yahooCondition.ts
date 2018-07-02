    export class Condition {
        code: string;
        date: string;
        temp: string;
        text: string;
    }

    export class Item {
        condition: Condition;
    }

    export class Channel {
        item: Item;
    }

    export class Results {
        channel: Channel;
    }

    export class Query {
        count: number;
        created: Date;
        lang: string;
        results: Results;
        location: string;
        woeid: number;
    }

    export class YahooCondition {
        query: Query;
    }



