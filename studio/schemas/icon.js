export default {
    "type": "object",
    "name": "icon",
    "title": "Icon",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Icon Title",
            "validation": null
        },
        {
            "type": "string",
            "name": "icon",
            "title": "Icon",
            "description": "Font Awesome Icon",
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
            "title": "title"
        }
    }
}