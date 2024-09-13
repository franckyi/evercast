export interface Hero {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": {
        "rendered": string
    },
    "modified": string,
    "modified_gmt": string,
    "slug": string,
    "status": string,
    "type": string,
    "link": string,
    "title": {
        "rendered": string
    },
    "content": {
        "rendered": string,
        "protected": boolean
    },
    "template": string,
    "meta": {
        "subtitle": string,
        "button1_text": string,
        "button1_icon": string,
        "button2_text": string,
        "button2_icon": string,
        "bg_img": string,
        "announce_title": string,
        "announce_desc": string,
        "use_dark_bg": boolean,
        "front_img": string
    },
    "class_list": string[],
    "_links": {
        "self": [
            {
                "href": string
            }
        ],
        "collection": [
            {
                "href": string
            }
        ],
        "about": [
            {
                "href": string
            }
        ],
        "wp:attachment": [
            {
                "href": string
            }
        ],
        "curies": [
            {
                "name": string,
                "href": string,
                "templated": boolean
            }
        ]
    }
}

export interface Solution {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": {
        "rendered": string
    },
    "modified": string,
    "modified_gmt": string,
    "slug": string,
    "status": string,
    "type": string,
    "link": string,
    "title": {
        "rendered": string
    },
    "content": {
        "rendered": string,
        "protected": boolean
    },
    "excerpt": {
        "rendered": string,
        "protected": boolean
    },
    "author": number,
    "featured_media": number,
    "template": string,
    "meta": {
        "display_order": number,
        "button_text": string,
        "short_desc": string,
        "bg_img": string,
        "section1_desc1": string,
        "section1_desc2": string,
        "section1_img": string,
        "section2_gallery_id": string | null,
        "section2_desc1": string,
        "section2_desc2": string,
        "section3_desc1": string,
        "section3_desc2": string,
        "section3_img": string,
        "section4_desc1": string,
        "section4_desc2": string,
        "section4_img": string,
        "is_displayed_on_home": boolean,
        "is_full_width_on_home": boolean,
        "pros": string,
        "use_cases": string,
        "pros_use_fancy_li_type": boolean,
        "use_cases_use_fancy_li_type": boolean
    },
    "categories": number[],
    "tags": number[],
    "class_list": string[],
    "_links": {
        "self": [
            {
                "href": string
            }
        ],
        "collection": [
            {
                "href": string
            }
        ],
        "about": [
            {
                "href": string
            }
        ],
        "author": [
            {
                "embeddable": boolean,
                "href": string
            }
        ],
        "wp:attachment": [
            {
                "href": string
            }
        ],
        "wp:term": [
            {
                "taxonomy": string,
                "embeddable": boolean,
                "href": string
            },
            {
                "taxonomy": string,
                "embeddable": boolean,
                "href": string
            }
        ],
        "curies": [
            {
                "name": string,
                "href": string,
                "templated": boolean
            }
        ]
    }
}

export interface Block {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": {
        "rendered": string
    },
    "modified": string,
    "modified_gmt": string,
    "slug": string,
    "status": string,
    "type": string,
    "link": string,
    "title": {
        "rendered": string
    },
    "content": {
        "rendered": string,
        "protected": boolean
    },
    "template": "",
    "meta": {
        "target_page": string,
        "display_order": number,
        "button_title": string,
        "button_text": string,
        "linked_gallery_id": string
    },
    "class_list": string[],
    "_links": {
        "self": [
            {
                "href": string
            }
        ],
        "collection": [
            {
                "href": string
            }
        ],
        "about": [
            {
                "href": string
            }
        ],
        "wp:attachment": [
            {
                "href": string
            }
        ],
        "curies": [
            {
                "name": string,
                "href": string,
                "templated": boolean
            }
        ]
    }
}

export interface Gallery {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": {
        "rendered": string
    },
    "modified": string,
    "modified_gmt": string,
    "slug": string,
    "status": string,
    "type": string,
    "link": string,
    "title": {
        "rendered": string
    },
    "content": {
        "rendered": string,
        "protected": boolean
    },
    "template": string,
    "meta": {
        "link_id": string
    },
    "class_list": string[],
    "_links": {
        "self": [
            {
                "href": string
            }
        ],
        "collection": [
            {
                "href": string
            }
        ],
        "about": [
            {
                "href": string
            }
        ],
        "wp:attachment": [
            {
                "href": string
            }
        ],
        "curies": [
            {
                "name": string,
                "href": string,
                "templated": boolean
            }
        ]
    }
}