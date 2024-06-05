# Product related information.

Since each product type may require different information, Simloans supports different forms of data to be submitted. The following list has the list of fields, by product code.

### Product codes

Here is a list of product codes supported by the system:

### HLN - Home Loan
**Type:** [Home Loan](#home-loan)

### PLN - Personal Loan
**Type:** [Personal Loan](#personal-loan)

### AUTO_LOAN - Car Loan
**Type:** [Car Loan](#car-loan)

### BUS - Business Loan
**Type:** [Business Loan](#business-loan)

### EDN - Education Loan
**Type:** [Education Loan](#education-loan)

### HILN - Home Improvement Loan
**Type:** [Home Improvement Loan](#home-improvement-loan)

### TRAVEL - Travel Loan
**Type:** [Travel Loan](#travelloan)

### GOLD_DL_INTT_CUM_BULLET - Gold Loan with Interest Cumulative Bullet Repayment
**Type:** [Gold Loan](#personal-loan)

### GOLD_TL - Gold Term Loan
**Type:** [Gold Term Loan](#personal-loan)

---
*Note: Click on the product codes to jump to the corresponding documentation.*


---

### Business Loan

**Description:** Represents a business loan application.
- [Finance Info](#financeinfo) - Inherited
- [Loan Data Personal Information](#loandatapersonalinformation) - Inherited
- `total_monthly_obligations` (float64): Total monthly financial obligations.
- `disbursement_schedule` (array of objects): Schedule for loan disbursement.
  - `estimated_date_n` (time.Time): Estimated disbursement date.
  - `estimated_amount` (float64): Estimated disbursement amount.
  - `stage` (string): Current stage of disbursement.

- `references` (array of objects): References provided by the applicant.
  - `kyc_documents` (array of objects): KYC (Know Your Customer) documents.
    - `document_type` (string): Type of KYC document.
    - `document_number` (string): KYC document number.
  - `name` (string): Reference name.
  - `full_name` (string): Full name of the reference.
  - `pan` (string): PAN (Permanent Account Number) of the reference.
  - `designation` (string): Designation of the reference.
  - `address1` (string): Reference address line 1.
  - `address2` (string): Reference address line 2.
  - `address3` (string): Reference address line 3.
  - `pin` (string): PIN code of the reference.
  - `district` (string): District of the reference.
  - `city` (string): City of the reference.
  - `state` (string): State of the reference.
  - `years_staying` (int): Number of years the reference has been staying.

- `business_type` (string): Type of business.
- `business_name` (string): Name of the business.
- `specific_purpose` (string): Specific purpose for the loan.
- `purpose_detail` (string): Details about the purpose of the loan.
- `business_plan` (string): Business plan provided by the applicant.
- `revenue` (int): Business revenue.
- `expenses` (int): Business expenses.
- `profit_margin` (int): Business profit margin.
- `loan_amount` (int): Requested loan amount.
- `tenure` (int): Loan tenure.
- `rate_of_interest` (int): Interest rate for the loan.
- `credit_history` (string): Credit history of the applicant.
- `credit_score` (int): Applicant's credit score.
- `bankruptcy` (bool): Indicates if the applicant has a history of bankruptcy.
- `outstanding_credit` (bool): Indicates if there is any outstanding credit.
- `cosigner` (bool): Indicates if there is a cosigner for the loan.
- `speciality_business` (string): Speciality or niche of the business.
- `repayment_strategy` (string): Repayment strategy for the loan.
- `risk_mitigation_strategy` (string): Strategy for mitigating loan-related risks.
- `additional_information` (string): Additional information provided by the applicant.

**JSON Sample:**
```json
{
  
  "total_monthly_obligations": 2500.0,
  "disbursement_schedule": [
    {
      "estimated_date_n": "2024-01-20T12:30:45Z",
      "estimated_amount": 5000.0,
      "stage": "Initial Approval"
    },
    {
      "estimated_date_n": "2024-02-15T10:00:00Z",
      "estimated_amount": 7500.0,
      "stage": "Final Approval"
    }
  ],
  "references": [
    {
      "kyc_documents": [
        {"document_type": "ID", "document_number": "ABC123"},
        {"document_type": "Address Proof", "document_number": "XYZ456"}
      ],
      "name": "John Doe",
      "full_name": "John M. Doe",
      "pan": "ABCDE1234F",
      "designation": "CEO",
      "address1": "123 Main St",
      "address2": "Apt 45",
      "address3": "Suburb",
      "pin": "560001",
      "district": "District ABC",
      "city": "City XYZ",
      "state": "State PQR",
      "years_staying": 5
    },
    // Additional reference entries...
  ],
  "business_type": "Private Limited",
  "business_name": "ABC Corp",
  "specific_purpose": "Expansion",
  "purpose_detail": "Opening new branches",
  "business_plan": "Detailed business expansion plan...",
  "revenue": 50000,
  "expenses": 30000,
  "profit_margin": 20000,
  "loan_amount": 100000,
  "tenure": 24,
  "rate_of_interest": 8,
  "credit_history": "Good",
  "credit_score": 750,
  "bankruptcy": false,
  "outstanding_credit": true,
  "cosigner": false,
  "speciality_business": "Technology",
  "repayment_strategy": "Monthly installments",
  "risk_mitigation_strategy": "Insurance coverage",
  "additional_information": "Any additional notes or details..."
}
```

### Education Loan

**Description:** Represents an education loan application.
- [Loan Data Personal Information](#loandatapersonalinformation) - Inherited
- `total_monthly_obligations` (float64): Total monthly financial obligations.
- `coborrower` (object): Co-borrower information.
  - `kyc_documents` (array of objects): KYC (Know Your Customer) documents for the co-borrower.
    - `document_type` (string): Type of KYC document.
    - `document_number` (string): KYC document number.
  - `name` (string): Co-borrower's name.
  - `full_name` (string): Full name of the co-borrower.
  - `pan` (string): PAN (Permanent Account Number) of the co-borrower.
  - `designation` (string): Designation of the co-borrower.

- `purpose` (string): Purpose of the education loan.
- `other_purpose` (string): Additional details about the purpose.
- `university` (string): University for the education.
- `course` (string): Course of study.
- `duration` (int): Duration of the course in months.
- `admitted` (bool): Indicates if the applicant has been admitted.
- `have_letter` (bool): Indicates if an admission letter is available.
- `loan_amount` (float64): Requested loan amount.
- `tuition_fees` (float64): Tuition fees for the education.
- `student_life_fees` (float64): Fees for student life.
- `housing` (float64): Housing expenses.
- `book_supplies_equipment` (float64): Expenses for books, supplies, and equipment.
- `food` (float64): Food expenses.
- `personal_expenses` (float64): Personal expenses.
- `total_cost_of_attendance` (float64): Total cost of attendance.
- `computer` (float64): Expense for a computer.
- `annual_income` (float64): Annual income of the applicant.
- `outstanding_loans` (bool): Indicates if there are outstanding loans.
- `obligations` (array of objects): Breakdown of monthly obligations.
  - `category` (string): Category of the obligation.
  - `amount` (float64): Monthly amount of the obligation.
- `have_income` (bool): Indicates if there is additional income.
- `have_coborrower` (bool): Indicates if there is a co-borrower.
- `repayment_strategy` (string): Strategy for loan repayment.
- `timeline_plan` (string): Plan for the education timeline.
- `scholarship` (bool): Indicates if the applicant has a scholarship.
- `additional_information` (string): Additional information provided by the applicant.

**JSON Sample:**
```json
{
  "total_monthly_obligations": 1500.0,
  "coborrower": {
    "kyc_documents": [
      {"document_type": "ID", "document_number": "XYZ789"},
      {"document_type": "Address Proof", "document_number": "ABC456"}
    ],
    "name": "Jane Doe",
    "full_name": "Jane M. Doe",
    "pan": "ABCDE5678G",
    "designation": "Professor"
  },
  "purpose": "Higher Education",
  "other_purpose": "Postgraduate Studies",
  "university": "ABC University",
  "course": "Master of Science in Computer Science",
  "duration": 24,
  "admitted": true,
  "have_letter": true,
  "loan_amount": 20000.0,
  "tuition_fees": 12000.0,
  "student_life_fees": 2000.0,
  "housing": 3000.0,
  "book_supplies_equipment": 1500.0,
  "food": 1000.0,
  "personal_expenses": 1000.0,
  "total_cost_of_attendance": 19500.0,
  "computer": 1500.0,
  "annual_income": 18000.0,
  "outstanding_loans": true,
  "obligations": [
    {"category": "Rent", "amount": 800.0},
    {"category": "Utilities", "amount": 200.0},
    // Additional obligation entries...
  ],
  "have_income": true,
  "have_coborrower": true,
  "repayment_strategy": "Monthly installments",
  "timeline_plan": "Complete in 24 months",
  "scholarship": false,
  "additional_information": "Any additional notes or details..."
}
```

### Home Loan

**Description:** Represents a home loan application.
- [Finance Info](#financeinfo) - Inherited
- [Loan Data Employment](#loandataemployment) - Inherited
- [Loan Data Personal Information](#loandatapersonalinformation) - Inherited
- `total_monthly_obligations` (float64): Total monthly financial obligations.
- `property_info` (object): Information about the property.
  - `address1` (string): Address line 1 of the property.
  - `address2` (string): Address line 2 of the property.
  - `address3` (string): Address line 3 of the property.
  - `pin` (string): PIN code of the property.
  - `district` (string): District of the property.
  - `state` (string): State of the property.
  - `years_staying` (int): Number of years staying in the property.
  - `price` (int): Price of the property.
  - `appraised` (bool): Indicates if the property has been appraised.

- `home_owner` (bool): Indicates if the applicant owns a home.
- `purpose` (string): Purpose of the home loan.
- `other_purpose` (string): Additional details about the purpose.
- `loan_amount` (int): Requested loan amount.
- `down_payment` (int): Down payment amount.
- `type_of_property` (string): Type of property (e.g., apartment, house).
- `interest_rate_type` (string): Type of interest rate (e.g., fixed, variable).
- `variable_period` (bool): Indicates if there is a variable interest period.
- `fixed_period` (bool): Indicates if there is a fixed interest period.
- `credit_history` (string): Credit history of the applicant.
- `credit_score` (int): Applicant's credit score.
- `bankruptcy` (bool): Indicates if the applicant has a history of bankruptcy.
- `outstanding_credit` (bool): Indicates if there is any outstanding credit.
- `cosigner` (bool): Indicates if there is a cosigner for the loan.
- `use_of_property` (string): Intended use of the property.
- `renovations` (bool): Indicates if renovations are planned.
- `long_term_goals` (string): Long-term goals related to the property.
- `management_plan` (string): Plan for managing the property.
- `additional_information` (string): Additional information provided by the applicant.

**JSON Sample:**
```json
{
  "total_monthly_obligations": 3000.0,
  "property_info": {
    "address1": "456 Oak Street",
    "address2": "Unit 7",
    "address3": "Suburb",
    "pin":

 "567890",
    "district": "District XYZ",
    "state": "State ABC",
    "years_staying": 10,
    "price": 250000,
    "appraised": true
  },
  "home_owner": true,
  "purpose": "Home Purchase",
  "other_purpose": "Family residence",
  "loan_amount": 200000,
  "down_payment": 50000,
  "type_of_property": "House",
  "interest_rate_type": "Fixed",
  "variable_period": false,
  "fixed_period": true,
  "credit_history": "Good",
  "credit_score": 780,
  "bankruptcy": false,
  "outstanding_credit": true,
  "cosigner": false,
  "use_of_property": "Residential",
  "renovations": true,
  "long_term_goals": "Retirement home",
  "management_plan": "Regular maintenance and upgrades",
  "additional_information": "Any additional notes or details..."
}
```

### Personal Loan

This type is used for GOLD loan types.

**Description:** Represents a personal loan application.
- [Finance Info](#financeinfo) - Inherited
- [Loan Data Employment](#loandataemployment) - Inherited
- [Loan Data Personal Information](#loandatapersonalinformation) - Inherited
- `total_monthly_obligations` (float64): Total monthly financial obligations.
- `purpose` (string): Purpose of the personal loan.
- `other_purpose` (string): Additional details about the purpose.
- `loan_amount` (int): Requested loan amount.
- `interest_rate_type` (string): Type of interest rate (e.g., fixed, variable).
- `variable_period` (bool): Indicates if there is a variable interest period.
- `fixed_period` (bool): Indicates if there is a fixed interest period.
- `preferred_tenure` (int): Preferred loan tenure.
- `credit_history` (string): Credit history of the applicant.
- `credit_score` (int): Applicant's credit score.
- `total_quantity_to_be_pledged` (int): Total quantity to be pledged.
- `bankruptcy` (bool): Indicates if the applicant has a history of bankruptcy.
- `outstanding_credit` (bool): Indicates if there is any outstanding credit.
- `cosigner` (bool): Indicates if there is a cosigner for the loan.
- `other_information` (string): Additional information provided by the applicant.
- `specific_terms` (string): Specific terms requested by the applicant.

**JSON Sample:**
```json
{
  "total_monthly_obligations": 1200.0,
  "purpose": "Debt Consolidation",
  "other_purpose": "Consolidating high-interest debts",
  "loan_amount": 15000,
  "interest_rate_type": "Variable",
  "variable_period": true,
  "fixed_period": false,
  "preferred_tenure": 36,
  "credit_history": "Fair",
  "credit_score": 650,
  "total_quantity_to_be_pledged": 0,
  "bankruptcy": false,
  "outstanding_credit": true,
  "cosigner": true,
  "other_information": "Any additional notes or details...",
  "specific_terms": "Flexible repayment terms"
}
```

### Car Loan

**Description:** Represents a car loan application.
- [Finance Info](#financeinfo) - Inherited
- [Loan Data Employment](#loandataemployment) - Inherited
- [Loan Data Personal Information](#loandatapersonalinformation) - Inherited
- `total_monthly_obligations` (float64): Total monthly financial obligations.
- `disbursement_schedule` (array of objects): Schedule for loan disbursement.
  - `estimated_date_n` (time.Time): Estimated disbursement date.
  - `estimated_amount` (int): Estimated disbursement amount.
  - `stage` (string): Current stage of disbursement.

- `car_make` (string): Make or brand of the car.
- `car_model` (string): Model of the car.
- `car_year` (int): Year of the car.
- `used` (bool): Indicates if the car is used.
- `loan_amount` (int): Requested loan amount.
- `mileage` (int): Mileage of the car.
- `credit_history` (string): Credit history of the applicant.
- `credit_score` (int): Applicant's credit score.
- `bankruptcy` (bool): Indicates if the applicant has a history of bankruptcy.
- `outstanding_credit` (bool): Indicates if there is any outstanding credit.
- `cosigner` (bool): Indicates if there is a cosigner for the loan.
- `tenure` (int): Loan tenure.
- `interest_rate_type` (string): Type of interest rate (e.g., fixed, variable).
- `down_payment` (int): Down payment amount.
- `management_plan` (string): Plan for managing the car.

**JSON Sample:**
```json
{
  "total_monthly_obligations": 800.0,
  "disbursement_schedule": [
    {
      "estimated_date_n": "2024-03-10T15:45:00Z",
      "estimated_amount": 15000,
      "stage": "Order Confirmation"
    },
    {
      "estimated_date_n": "2024-04-05T12:00:00Z",
      "estimated_amount": 20000,
      "stage": "Delivery"
    }
  ],
  "car_make": "Toyota",
  "car_model": "Camry",
  "car_year": 2023,
  "used": false,
  "loan_amount": 25000,
  "mileage": 20000,
  "credit_history": "Good",
  "credit_score": 720,
  "bankruptcy": false,
  "outstanding_credit": true,
  "cosigner": false,
  "tenure": 48,
  "interest_rate_type": "Fixed",
  "down_payment": 5000,
  "management_plan": "Regular maintenance and insurance coverage"
}
```

### Home Improvement Loan

**Description:** Represents a home improvement loan application.
- [Finance Info](#financeinfo) - Inherited
- [Loan Data Employment](#loandataemployment) - Inherited
- [Loan Data Personal Information](#loandatapersonalinformation) - Inherited
- `total_monthly_obligations` (float64): Total monthly financial obligations.
- `disbursement_schedule` (array of objects): Schedule for loan disbursement.
  - `estimated_date_n` (time.Time): Estimated disbursement date.
  - `estimated_amount` (int): Estimated disbursement amount.
  - `stage` (string): Current stage of disbursement.

- `coborrower` (object): Co-borrower information.
  - `kyc_documents` (array of objects): KYC (Know Your Customer) documents for the co-borrower.
    - `document_type` (string): Type of KYC document.
    - `document_number` (string): KYC document number.
  - `name` (string): Co-borrower's name.
  - `full_name` (string): Full name of the co-borrower.
  - `pan` (string): PAN (Permanent Account Number) of the co-borrower.
  - `designation` (string): Designation of the co-borrower.
  - `address1` (string): Co-borrower's address line 1.
  - `address2` (string): Co-borrower's address line 2.
  - `address3` (string): Co-borrower's address line 3.
  - `pin` (string): PIN code of the co-borrower.
  - `district` (string): District of the co-borrower.
  - `city` (string): City of the co-borrower.
  - `state` (string): State of the co-borrower.
  - `years_staying` (int): Number of years the co-borrower has been staying.

- `property_info` (object): Information about the property for improvement.
  - `address1` (string): Property address line 1.
  - `address2` (string): Property address line 2.
  - `address3` (string): Property address line 3.
  - `pin` (string): PIN code of the property.
  - `district` (string): District of the property.
  - `state` (string): State of the property.
  - `city` (string): City of the property.
  - `years_staying` (int): Number of years the applicant has been staying in the property.

- `about_person` (string): Brief information about the applicant.
- `purpose` (string): Purpose of the home improvement loan.
- `other_purpose` (string): Other details about the purpose.
- `loan_amount` (int): Requested loan amount.
- `down_payment` (int): Down payment amount.
- `project_scope` (string): Scope of the home improvement project.
- `type_of_property` (string): Type of property.
- `outstanding_loans` (bool): Indicates if there are outstanding loans.
- `credit_history` (string): Credit history of the applicant.
- `credit_score` (int): Applicant's credit score.
- `bankruptcy` (bool): Indicates if the applicant has a history of bankruptcy.
- `outstanding_credit` (bool): Indicates if there is any outstanding credit.
- `cosigner` (bool): Indicates if there is a cosigner for the loan.
- `repayment_strategy` (string): Repayment strategy for the loan.
- `additional_information` (string): Additional information provided by the applicant.

**JSON Sample:**
```json
{
  "total_monthly_obligations": 3000.0,
  "disbursement_schedule": [
    {
      "estimated_date_n": "2024-03-15T14:00:00Z",
      "estimated_amount": 8000,
      "stage": "Initial Approval"
    },
    {
      "estimated_date_n": "2024-04-10T12:30:45Z",
      "estimated_amount": 12000,
      "stage": "Final Approval"
    }
  ],
  "coborrower": {
    "kyc_documents": [
      {"document_type": "ID", "document_number": "DEF456"},
      {"document_type": "Address Proof", "document_number": "LMN789"}
    ],
    "name": "Jane Doe",
    "full_name": "Jane M. Doe",
    "pan": "FGHIJ5678K",
    "designation": "Co-owner",
    "address1": "456 Oak St",
    "address2": "Unit 67",
    "address3": "Suburbia",
    "pin": "560002",
    "district": "District XYZ",
    "city": "City ABC",
    "state": "State MNO",
    "years_staying": 8
  },
  "property_info": {
    "address1": "789 Maple St",
    "address2": "Floor 2",
    "address3": "Downtown",
    "pin": "560003",
    "district": "District PQR",
    "state": "State UVW",
    "city": "City LMN",
    "years_staying": 10
  },
  "about_person": "Homeowner looking to renovate for better living conditions.",
  "purpose": "Home Improvement",
  "other_purpose": "Renovate kitchen and bathroom",
  "loan_amount": 20000,
  "down_payment": 3000,
  "project_scope": "Complete renovation of specified areas",
  "type_of_property": "Single Family Home",
  "outstanding_loans": true,
  "credit_history": "Good",
  "credit_score": 720,
  "bankruptcy": false,
  "outstanding_credit": true,
  "cosigner": false,
  "repayment_strategy": "Monthly installments",
  "additional_information": "Any additional notes or details..."
}
```

### Travel Loan

**Description:** Represents a travel loan application.
- [Finance Info](#financeinfo) - Inherited
- [Loan Data Employment](#loandataemployment) - Inherited
- [Loan Data Personal Information](#loandatapersonalinformation) - Inherited
- `total_monthly_obligations` (float64): Total monthly financial obligations.
- `travel_group` (array of objects): Information about the group traveling.
  - `kyc_documents` (array of objects): KYC (Know Your Customer) documents for the travelers in the group.
    - `document_type` (string): Type of KYC document.
    - `document_number` (string): KYC document number.
  - `name` (string): Traveler's name.
  - `full_name` (string): Full name of the traveler.
  - `pan` (string): PAN (Permanent Account Number) of the traveler.

- `agency_address` (object): Address information of the travel agency.
  - `address1` (string): Agency address line 1.
  - `pin` (string): PIN code of the agency.
  - `district` (string): District of the agency.
  - `state` (string): State of the agency.
  - `address2` (string): Agency address line 2.
  - `address3` (string): Agency address line 3.
  - `city` (string): City of the agency.
  - `years_staying` (int): Number of years the agency has been staying.

- `loan_amount` (int): Requested loan amount.
- `interest_rate_type` (string): Type of interest rate.
- `variable_period` (bool): Indicates if there is a variable interest period.
- `fixed_period` (bool): Indicates if there is a fixed interest period.
- `term_loan` (int): Term of the loan.
- `credit_score` (int): Applicant's credit score.
- `credit_history` (string): Credit history of the applicant.
- `bankruptcy` (bool): Indicates if the applicant has a history of bankruptcy.
- `outstanding_credit` (bool): Indicates if there is any outstanding credit.
- `cosigner` (bool): Indicates if there is a cosigner for the loan.
- `destination` (string): Travel destination.
- `duration` (int): Duration of the travel.
- `group_travel` (bool): Indicates if it is a group travel.
- `booked_already` (bool): Indicates if the travel is already booked.
- `booked_tour` (bool): Indicates if a tour is already booked.
- `agency_name` (string): Name of the travel agency.
- `travel_reason` (string): Reason for travel.
- `other_information` (string): Additional information provided by the applicant.
- `specific_terms` (string): Specific terms or conditions related to the travel loan.

**JSON Sample:**
```json
{
  "total_monthly_obligations": 2500.0,
  "travel_group": [
    {
      "kyc_documents": [
        {"document_type": "Passport", "document_number": "AB1234567"},
        {"document_type": "ID", "document_number": "XYZ789"}
      ],
      "name": "John Doe",
      "full_name": "John M. Doe",
      "pan": "ABCDE1234F"
    },
    {
      "kyc_documents": [
        {"document_type": "Driver's License", "document_number": "PQR5678"},
        {"document_type": "Address Proof", "document_number": "LMN456"}
      ],
      "name": "Jane Doe",
      "full_name": "Jane M. Doe",
      "pan": "FGHIJ5678K"
    }
  ],
  "agency_address": {
    "address1": "123 Travel St",
    "pin": "560001",
    "district": "District ABC",
    "state": "State XYZ",
    "address2": "Suite 45",
    "address3": "Travel Center",
    "city": "City PQR",
    "years_staying": 5
  },
  "loan_amount": 5000,
  "interest_rate_type": "Fixed",
  "variable_period": false,
  "fixed_period": true,
  "term_loan": 12,
  "credit_score": 700,
  "credit_history": "Good",
  "bankruptcy": false,
  "outstanding_credit": true,
  "cosigner": false,
  "destination": "Paris",
  "duration": 14,
  "group_travel": true,
  "booked_already": false,
  "booked_tour": true,
  "agency_name": "Dream Travels",
  "travel_reason": "Vacation",
  "other_information": "Any additional notes or details...",
  "specific_terms": "Terms and conditions specific to the travel loan."
}
```

## LoanDataPersonalInformation

Contains personal information for a loan application.

### Fields

- **address1** (`string`): Primary address line.
- **address2** (`string`): Secondary address line.
- **address3** (`string`): Tertiary address line.
- **address_type** (`string`): Type of address.
- **years_staying** (`integer`): Number of years staying at the address.
- **pin** (`string`): PIN code.
- **district** (`string`): District.
- **state** (`string`): State.
- **city** (`string`): City.
- **customer** (`object`): Customer details.
  - **pan** (`string`): PAN number.
  - **dob** (`string` - `date-time`): Date of birth.
  - **customer_type** (`string`): Type of customer.

### Example

```json
{
  "address1": "123 Main St",
  "address2": "Apt 4B",
  "address3": "",
  "address_type": "Residential",
  "years_staying": 5,
  "pin": "123456",
  "district": "Central",
  "state": "StateName",
  "city": "CityName",
  "customer": {
    "pan": "ABCDE1234F",
    "dob": "1990-01-01T00:00:00Z",
    "customer_type": "Individual"
  }
}
```

## LoanDataEmployment

Contains employment information for a loan application.

### Fields

- **employment_status** (`string`): Employment status.
- **employer** (`string`): Employer name.
- **title** (`string`): Job title.
- **years_at_job** (`integer`): Number of years at the current job.
- **annual_income** (`integer`): Annual income.
- **change_income** (`boolean`): Indicates if there has been a change in income.
- **reason_change_income** (`string`): Reason for the change in income.
- **income_reason** (`string`): Reason for the current level of income.
- **years_in_business** (`integer`): Number of years in business (if self-employed).

### Example

```json
{
  "employment_status": "Employed",
  "employer": "TechCorp",
  "title": "Software Engineer",
  "years_at_job": 3,
  "annual_income": 80000,
  "change_income": false,
  "reason_change_income": "",
  "income_reason": "Stable job",
  "years_in_business": 0
}
```

## EmployerSection

Contains information about previous employers.

### Fields

- **_id** (`string`, optional): Unique identifier.
- **name** (`string`): Name of the employer.
- **total_experience_years** (`integer`): Total years of experience.
- **total_experience_months** (`integer`): Residual months of experience.
- **from_date** (`string` - `date-time`): Start date of employment.
- **to_date** (`string` - `date-time`): End date of employment.
- **organization_type** (`string`): Type of organization.
- **designation** (`string`): Designation held.
- **employee_number** (`string`): Employee number.
- **retirement_age** (`integer`): Retirement age.
- **employer_website** (`string`): Employer website.
- **employer_classification** (`string`): Classification of the employer.

### Example

```json
{
  "_id": "12345",
  "name": "OldCompany",
  "total_experience_years": 5,
  "total_experience_months": 6,
  "from_date": "2015-06-01T00:00:00Z",
  "to_date": "2021-12-31T00:00:00Z",
  "organization_type": "Private",
  "designation": "Senior Developer",
  "employee_number": "E12345",
  "retirement_age": 60,
  "employer_website": "http://oldcompany.com",
  "employer_classification": "Technology"
}
```

## Income

Contains details about an individual's income.

### Fields

- **_id** (`string`, optional): Unique identifier.
- **income_type** (`string`): Type of income.
- **gross_amount** (`integer`): Gross amount of income.
- **net_amount** (`integer`): Net amount of income.
- **frequency** (`string`): Frequency of income (e.g., monthly, yearly).
- **yearly_income** (`integer`): Yearly income.
- **dox_url** (`string`): URL to documentation of income.
- **allowed_income** (`integer`): Allowed income amount.
- **remarks** (`string`): Remarks or notes about the income.
- **income_proof_type** (`string`): Type of proof for the income.
- **seq_no** (`integer`): Sequence number.
- **invalidate** (`boolean`): Indicates if the income record is invalidated.
- **invalidation_date** (`string` - `date-time`, optional): Date when the income was invalidated.

### Example

```json
{
  "_id": "56789",
  "income_type": "Salary",
  "gross_amount": 100000,
  "net_amount": 80000,
  "frequency": "Monthly",
  "yearly_income": 960000,
  "dox_url": "http://example.com/income-proof.pdf",
  "allowed_income": 80000,
  "remarks": "Primary income source",
  "income_proof_type": "Payslip",
  "seq_no": 1,
  "invalidate": false,
  "invalidation_date": null
}
```

## ObligationDivision

Contains details about an individual's financial obligations.

### Fields

- **_id** (`string`, optional): Unique identifier.
- **obligation_type** (`string`): Type of obligation.
- **gross_obligations** (`integer`): Gross amount of obligations.
- **net_obligations** (`integer`): Net amount of obligations.
- **frequency** (`string`): Frequency of obligations (e.g., monthly, yearly).

### Example

```json
{
  "_id": "67890",
  "obligation_type": "Loan",
  "gross_obligations": 50000,
  "net_obligations": 40000,
  "frequency": "Monthly"
}
```

## BankAccount

Contains details about a bank account.

### Fields

- **_id** (`string`): Unique identifier.
- **name** (`string`): Name of the account holder.
- **city** (`string`): City of the bank branch.
- **bank** (`string`): Name of the bank.
- **account_type** (`string`): Type of bank account.
- **branch** (`string`): Bank branch.
- **address** (`string`): Address of the bank branch.
- **ifsc** (`string`, optional): IFSC code.
- **micr** (`string`, optional): MICR code.
- **account_number** (`string`, optional): Account number.
- **balance** (`integer`, optional): Account balance.

### Example

```json
{
  "_id": "78901",
  "name": "John Doe",
  "city": "New York",
  "bank": "Bank of America",
  "account_type": "Savings",
  "branch": "Downtown",
  "address": "123 Bank St",
  "ifsc": "BOFA0001234",
  "micr": "110002345",
  "account_number": "123456789012",
  "balance": 5000
}
```

## CreditCard

Contains details about a credit card.

### Fields

- **_id** (`string`, optional): Unique identifier.
- **issuer** (`string`): Issuer of the credit card.
- **card_no** (`string`): Credit card number.
- **card_type** (`integer`): Type of credit card.
- **outstanding_balance** (`integer`): Outstanding balance on the credit card.
- **remarks** (`string`): Remarks or notes about the credit card.

### Example

```json
{
  "_id": "89012",
  "issuer": "Visa",
  "card_no": "4111111111111111",
  "card_type": 1,
  "outstanding_balance": 1500,
  "remarks": "Primary credit card"
}
```

## TermDeposit

Contains details about a term deposit.

### Fields

- **bank** (`string`): Bank where the term deposit is held.
- **term_deposit_receipt_no** (`string`): Receipt number of the term deposit.
- **amount** (`integer`): Amount of the term deposit.
- **rate_of_interest** (`number` - `float`): Rate of interest for the term deposit.
- **date_of_maturity** (`string` - `date-time`): Date of maturity for the term deposit.

### Example

```json
{
  "bank": "State Bank",
  "term_deposit_receipt_no": "TD123456",
  "amount": 10000,
  "rate_of_interest": 5.5,
  "date_of_maturity": "2025-12-31T00:00:00Z"
}
```

## Asset

Contains details about an asset.

### Fields

- **_id** (`string`, optional): Unique identifier.
- **asset_type** (`integer`): Type of asset.
- **description**

 (`string`): Description of the asset.
- **asset_no** (`integer`): Asset number.
- **asset_value** (`integer`): Value of the asset.
- **remarks** (`string`): Remarks or notes about the asset.

### Example

```json
{
  "_id": "90123",
  "asset_type": 1,
  "description": "House",
  "asset_no": 123,
  "asset_value": 250000,
  "remarks": "Primary residence"
}
```

## FinanceInfo

Contains financial information including incomes, obligations, bank accounts, term deposits, credit cards, and current assets.

### Fields

- **incomes** (`array` of `Income`): List of incomes.
- **obligations** (`array` of `ObligationDivision`): List of obligations.
- **bank_accounts** (`array` of `BankAccount`): List of bank accounts.
- **term_deposits** (`array` of `TermDeposit`): List of term deposits.
- **credit_cards** (`array` of `CreditCard`): List of credit cards.
- **current_assets** (`array` of `Asset`): List of current assets.

### Example

```json
{
  "incomes": [
    {
      "_id": "56789",
      "income_type": "Salary",
      "gross_amount": 100000,
      "net_amount": 80000,
      "frequency": "Monthly",
      "yearly_income": 960000,
      "dox_url": "http://example.com/income-proof.pdf",
      "allowed_income": 80000,
      "remarks": "Primary income source",
      "income_proof_type": "Payslip",
      "seq_no": 1,
      "invalidate": false,
      "invalidation_date": null
    }
  ],
  "obligations": [
    {
      "_id": "67890",
      "obligation_type": "Loan",
      "gross_obligations": 50000,
      "net_obligations": 40000,
      "frequency": "Monthly"
    }
  ],
  "bank_accounts": [
    {
      "_id": "78901",
      "name": "John Doe",
      "city": "New York",
      "bank": "Bank of America",
      "account_type": "Savings",
      "branch": "Downtown",
      "address": "123 Bank St",
      "ifsc": "BOFA0001234",
      "micr": "110002345",
      "account_number": "123456789012",
      "balance": 5000
    }
  ],
  "term_deposits": [
    {
      "bank": "State Bank",
      "term_deposit_receipt_no": "TD123456",
      "amount": 10000,
      "rate_of_interest": 5.5,
      "date_of_maturity": "2025-12-31T00:00:00Z"
    }
  ],
  "credit_cards": [
    {
      "_id": "89012",
      "issuer": "Visa",
      "card_no": "4111111111111111",
      "card_type": 1,
      "outstanding_balance": 1500,
      "remarks": "Primary credit card"
    }
  ],
  "current_assets": [
    {
      "_id": "90123",
      "asset_type": 1,
      "description": "House",
      "asset_no": 123,
      "asset_value": 250000,
      "remarks": "Primary residence"
    }
  ]
}
```