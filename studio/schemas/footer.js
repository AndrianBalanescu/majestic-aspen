export default {
    "type": "document",
    "name": "footer",
    "title": "Footer Configuration",
    "fields": [
        {
            "type": "array",
            "name": "social_icons",
            "title": "Social Media Icons",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Icon Title",
                            "validation": Rule => Rule.required()
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
                            "name": "url",
                            "title": "Icon URL",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "copyright",
            "title": "Footer Copyright",
            "description": "The copyright text displayed in the page footer.",
            "validation": null
        },
        {
            "type": "array",
            "name": "links",
            "title": "Links",
            "description": "A list of links displayed in the footer.",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "text",
                            "title": "Link text",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "url",
                            "title": "URL",
                            "validation": null
                        },
                        {
                            "type": "boolean",
                            "name": "new_window",
                            "title": "Open in new window",
                            "initialValue": true,
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "text"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Footer Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data/footer.yml"
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