# Scolend Open API Documentation

## Introduction

The Scolend Open API provides access to master information about universities, master programs, and various product categories. This document outlines the available endpoints, their descriptions, and usage.

## Base URL

The base URL for all endpoints is:

```
https://scolendservice.simops.in/open/
```

## Endpoints

### 1. Retrieve University Information

#### Endpoint

```
GET /university
```

#### Description

This endpoint retrieves master information about universities.

#### Response

```json
{
    "data": [
        {
            "_id": "AGH University of Science and Technology-PL",
            "name": "AGH University of Science and Technology"
        }
    ]
}
```

### 2. Retrieve Master Products

#### Endpoint

```
GET /masters/product
```

#### Description

This endpoint retrieves master information about products.

#### Response

```json
{
    "data": [
        {
            "_id": "AUTO_LOAN",
            "description": "Auto Loan",
            "emi_days": [4, 10, 15],
            "credit_exposure_originator": 0,
            "credit_exposure_colender": 500000000,
            "max_credit_exposure": 600000000,
            "originator_product_code": "",
            "purposes": null,
            "colender_product_code": "",
            "status": "ACTIVE",
            "custom_fields": [
                {
                    "name": "vehicle_year",
                    "type": "number",
                    "options": null,
                    "value": null
                },
                {
                    "name": "vehicle_make",
                    "type": "dropdown_master_with_children",
                    "options": null,
                    "value": null
                }
            ],
            "_rev": "11-26fc6717242c6c3e491369ec336c3639",
            "document_type": "product",
            "ownership_id": "",
            "doc_status": "",
            "enabled": true,
            "rejected": false,
            "deleted": false
        },
        {
            "_id": "EDN",
            "description": "Education Loan",
            "emi_days": [2, 5, 8],
            "credit_exposure_originator": 0,
            "credit_exposure_colender": 1000000000,
            "max_credit_exposure": 50000000000,
            "originator_product_code": "",
            "purposes": [
                {
                    "_id": "loan_purpose_DOM-EDU",
                    "master_category": "loan_purpose",
                    "code": "DOM-EDU",
                    "label": "Domestic Education",
                    "information": "Domestic Education",
                    "_rev": "2-81ea5ce0e190d042f9b01cd3c8a1258e",
                    "document_type": "master",
                    "ownership_id": "",
                    "doc_status": "",
                    "enabled": true,
                    "rejected": false,
                    "deleted": false
                }
            ],
            "_rev": "11-26fc6717242c6c3e491369ec336c3639",
            "document_type": "product",
            "ownership_id": "",
            "doc_status": "",
            "enabled": true,
            "rejected": false,
            "deleted": false
        }
    ]
}
```

### 3. Retrieve University Program Information

#### Endpoint

```
GET /university_program/:university_id
```

#### Description

This endpoint retrieves master information about university programs.

#### Response

```json
{
    "data": [
        {
            "_rev": "2-50e80ed864d81e79f65fbbf94bcc7da4",
            "document_type": "university_program",
            "ownership_id": "",
            "doc_status": "",
            "enabled": true,
            "rejected": false,
            "deleted": false,
            "duration": 18,
            "courses": ["ARCH 501 : "],
            "no_of_semester": 3,
            "exchange_rate": {
                "_rev": "2-06d49793458635a3ed35c8907880dd05",
                "document_type": "exchange_rate",
                "ownership_id": "",
                "doc_status": "",
                "enabled": true,
                "rejected": false,
                "deleted": false,
                "_id": "9a65e969-80e4-48f1-b58d-e4c1b90b6f97",
                "currency_code": "USD",
                "rate": 99
            },
            "program_type": "Masters",
            "program_name": "Architecture",
            "university": "George Washington University",
            "university_id": "George Washington University-US",
            "estimated_education_cost": {
                "tuition_fees": 59750,
                "student_life_fees": 406,
                "housing": 12380,
                "food": 7010,
                "book_supplies_equipment": 880,
                "personal_expenses": 2304,
                "computer": 2000,
                "total_cost_of_attendance": 82730,
                "amount_to_disburse": 0
            },
            "_id": "a032ffae-1240-4132-94cc-3d311cb8e2a5"
        }
    ]
}
```

### 4. Retrieve Master Data by Category

#### Endpoint

```
GET /master/:category
```

#### Description

This endpoint retrieves master data based on the specified category.

#### Valid Categories

- vehicle_make: Categories representing different makes or manufacturers of vehicles.
- time_frequency: Categories representing different time frequencies, such as daily, weekly, monthly, etc.
- income_type: Categories representing different types of income, such as salary, dividends, rental income, etc.
- asset_type: Categories representing different types of assets, such as real estate, stocks, bonds, etc.
- card_type: Categories representing different types of cards, such as credit cards, debit cards, prepaid cards, etc.
- bank_master: Categories representing different banks or financial institutions.
- bank_account_type: Categories representing different types of bank accounts, such as savings accounts, checking accounts, etc.
- property_type: Categories representing different types of properties, such as residential, commercial, industrial, etc.
- customer_type_master: Categories representing different types of customers or clients.
- address_type: Categories representing different types of addresses, such as residential addresses, business addresses, etc.
- obligation_type: Categories representing different types of obligations or debts, such as loans, mortgages, credit card debts, etc.
- organization_type: Categories representing different types of organizations, such as corporations, nonprofits, government agencies, etc.
- partner_type: Categories representing different types of business partners or collaborators.
- country_code: Categories representing different countries, typically using ISO 3166 country codes.
- business_type: Categories representing different types of businesses, such as sole proprietorships, partnerships, corporations, etc.

#### Response

The response will vary based on the requested category. An example response for `vehicle_make` category is:

```json
{
    "masters": [
        {
            "_id": "vehicle_make_MAHINDRA",
            "master_category": "vehicle_make",
            "code": "MAHINDRA",
            "label": "Mahindra",
            "information": "Mahindra",
            "_rev": "3-e79c3e4060a732d482af9d116ea00a46",
            "document_type": "master",
            "ownership_id": "",
            "doc_status": "",
            "enabled": true,
            "rejected": false,
            "deleted": false,           
            "children": [
                {
                "code": "ABC123",
                "label": "Vehicle Make 1"
                },
                {
                "code": "XYZ456",
                "label": "Vehicle Make 2"
                }
            ]
        },
        {
            "_id": "vehicle_make_MARUTI",
            "master_category": "vehicle_make",
            "code": "MARUTI",
            "label": "Maruti",
            "information": "Maruti",
            "_rev": "4-20720654f16f5f92113a537b0695bbcc",
            "document_type": "master",
            "ownership_id": "",
            "doc_status": "",
            "enabled": true,
            "rejected": false,
            "deleted": false
        }
    ]
}
```

---

### 5. Get Partners

#### Endpoint

```
GET /partner/local
```

#### Description

This endpoint retrieves the list of partners within the system.

#### Response

```json
{
    "data": [
        {
            "_rev": "2-50e80ed864d81e79f65fbbf94bcc7da4",
            "name" : "SAMPLE COMPANY NAME",
            "_id": "a032ffae-1240-4132-94cc-3d311cb8e2a5"
        }
    ]
}
```