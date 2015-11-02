/**
 * Created by Maxim Omelchenko on 15.01.2015 at 18:53.
 */
var SamsonCMS_InputNumber = function(fields) {
    // Create Number field instance with save handler
    SamsonCMS_InputText(fields);
};

// Bind input
SamsonCMS_Input.bind(SamsonCMS_InputNumber, '.__inputfield.__unique_url');