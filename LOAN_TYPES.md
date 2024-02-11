# Product related inforation.

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