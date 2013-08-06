/*global window:true*/

(function (undefined) {
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
            formattedString = formattedString.replace(regex, arguments[i]);
        }
        //TODO: throw exception if not enough arguments provided, based on format string
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
