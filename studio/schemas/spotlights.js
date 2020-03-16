export default {
    "type": "object",
    "name": "spotlights",
    "title": "Spotlights Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title displayed at the top of the section (Also used by the CMS, even if no title is displayed in the section)",
            "initialValue": "Spotlights Section",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "two",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "spotlights.html"
                ]
            }
        },
        {
            "type": "array",
            "name": "spotlights",
            "title": "Spotlight Sections",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Spotlight Title",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "markdown",
                            "name": "text",
                            "title": "Spotlight Text",
                            "description": "The text displayed below the spotlight title",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "image",
                            "title": "Spotlight Image",
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
            "type": "array",
            "name": "icons",
            "title": "Icons",
            "description": "Icons displayed at the bottom of the section",
            "validation": null,
            "of": [
                {
                    "type": "icon"
                }
            ]
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "spotlights"
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