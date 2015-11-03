var SamsonCMS_InputURL = function(fields) {
    SamsonCMS_InputText(fields, function(response, field, sp) {
        response = JSON.parse(response);
        var error;
        var parent = field.parent();
        if (response.urlError != undefined) {
            if (parent.next().length && parent.next().hasClass('template-form-error')) {
                error = parent.next();
                error.html(response.urlError);
            } else {
                error = s('<div class="template-form-error">' + response.urlError  + '</div>');
            }
            parent.css('border-color', 'red');
            parent.parent().append(error);
        } else {
            if (parent.next().length && parent.next().hasClass('template-form-error')) {
                parent.next().remove();
            }
            parent.css('border-color', 'black');
        }

        // Think it is not empty
        field.removeClass('__empty');

        // Set field view
        sp.html(s('.__input', field).val());

        // Fill sp with correct new value
        if(!s('.__input', field).val().length )
        {
            field.addClass('__empty');
            sp.html(s('input[name="__empty_text"]',field).val());
        }
    });
};

// Bind input
SamsonCMS_Input.bind(SamsonCMS_InputURL, '.__inputfield.__unique_url');