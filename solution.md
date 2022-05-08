1. The XWizard component contains the main logic of the wizard.
2. Depending on the current step of the wizard, the required component is rendered from the currentStep variable. When clicking on the forward or back buttons, currentStep decreases or increases and computed fires, which calculates the name of the component that should be drawn
3. In the XWizard component, a model is declared that stores all the values ​​of the form fields with Page 2. This model is used to render Page 3.
4. The model is passed as props for the XCalculator (Page 2) and XSummary (Page 3) components
5. For the XCalculator component, the fields object is also passed, which contains descriptions for building the form
6. The fields object is enriched with data in computed. Because we have to change labels for premium radio buttons depending on previously entered data.
7. For form validation Page 2 use vee-validate
8. Rules for validation added to plugins/vee-validate.js