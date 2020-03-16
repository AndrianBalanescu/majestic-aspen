export default {
    "type": "object",
    "name": "icons",
    "title": "Icons Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title displayed at the top of the section (Also used by the CMS, even if no title is displayed in the section)",
            "initialValue": "Icons Section",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "one",
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
                    "icons.html"
                ]
            }
        },
        {
            "type": "string",
            "name": "background_style",
            "title": "Background Style",
            "description": "The color style for the background",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "style1",
                    "style2",
                    "style3",
                    "style4"
                ]
            }
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
                    "icons"
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