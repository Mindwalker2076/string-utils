/*global window:true,module:true*/

(function () {
    "use strict";

    var StringUtils = function () {};

    /*
    StringUtils.format works similar to the String.Format found in .Net.

    Parameters in format string like {0}, {1}, etc. are replaced with their respective arguments in the returned string

    Examples:

    StringUtils.format("The {0} is against the {1}.", "chair", "wall"); // "The chair is against the wall."
    StringUtils.format("{0}: Getting ready to publish", new Date()) // "Mon Aug 05 2013 21:21:11 GMT-0500 (CDT): Getting ready to publish"
    */

    StringUtils.format = function (formatString) {
        var formattedString = formatString,
            pattern,
            regex,
            i;
        for (i = 1; i < arguments.length; i += 1) {
            pattern = "(^|[^{])\\{" + (i - 1).toString() + "\\}($|[^}])";
            regex = new RegExp(pattern, "gi");
            formattedString = formattedString.replace(regex, "$1" + arguments[i] + "$2");
        }
        pattern = "(^|[^{])\\{[0-9]+\\}($|[^}])";
        regex = new RegExp(pattern, "gi");
        if (regex.test(formattedString)) {
            throw "Index (zero based) must be greater than or equal to zero and less than the size of the argument list.";
        }

        pattern = "(^|[^{])\\{[^}]*\\}($|[^}])";
        regex = new RegExp(pattern, "gi");
        if (regex.test(formattedString)) {
            throw "Input string was not in a correct format.";
        }
        pattern = "\\{{2}";
        regex = new RegExp(pattern, "gi");
        formattedString = formattedString.replace(regex, "{");
        pattern = "\\}{2}";
        regex = new RegExp(pattern, "gi");
        formattedString = formattedString.replace(regex, "}");
        return formattedString;
    };


    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports.StringUtils = StringUtils;
    } else {
        window.StringUtils = StringUtils;
    }

}());
