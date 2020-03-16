export default {
    "type": "object",
    "name": "action",
    "title": "Action",
    "fields": [
        {
            "type": "string",
            "name": "label",
            "title": "Button Label",
            "validation": null
        },
        {
            "type": "string",
            "name": "icon",
            "title": "Button Icon",
            "description": "Font Awesome Icon",
            "validation": null
        },
        {
            "type": "string",
            "name": "url",
            "title": "Button URL",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "is_primary",
            "title": "Is Primary",
            "description": "Gives the button a primary color scheme",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "is_scrolly",
            "title": "Is Scrolly",
            "description": "adds a scroll animation (enable if button URL is set to a section ID)",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "label"
        }
    }
}