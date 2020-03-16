export default {
    "type": "document",
    "name": "header",
    "title": "Header Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title_url",
            "title": "Title URL",
            "description": "The link used in the page title",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Header Subtitle",
            "description": "The text displayed below the page title",
            "validation": null
        },
        {
            "type": "array",
            "name": "actions",
            "title": "Header Actions",
            "description": "The action buttons displayed in the page header",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "object",
            "name": "img",
            "title": "Header Image",
            "validation": null,
            "fields": [
                {
                    "type": "image",
                    "name": "path",
                    "title": "Image",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "phone_border",
                    "title": "Header Image Phone Border",
                    "description": "Puts a phone border around the header image",
                    "validation": null
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Header Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data/header.yml"
                ]
            }
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
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}