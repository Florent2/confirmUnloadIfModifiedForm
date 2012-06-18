confirmUnloadIfModifiedForm
===

confirmUnloadIfModifiedForm is a jQuery plugin that asks confirmation to the 
user when she leaves a page containing a form she started to fill in. The goal 
is to make sure the user has a chance to stay on a page she is working on when 
she inadvertently closes it.

It relies on the 
[`onbeforeunload`](http://msdn.microsoft.com/en-us/library/ie/ms536907.aspx) 
event (not supported by Opera) and the 
[`serialize`](http://api.jquery.com/serialize/) jQuery method (form elements 
must have a `name` element, data from `file` select element are not taken into 
account).

Usage
---

Just call the `confirmUnloadIfModified` on any form element:

    $("form[data-confirm-unload='true']").confirmUnloadIfModified({ message: "your warning message"});

The only supported option (at present) is "message" which has a default value 
of "You've started to fill in the form."

How it works
---

When the `confirmUnloadIfModified` method is called the plugin serializes the 
initial content of the form and attaches a function to the `onbeforeunload` 
event. This function checks if the form has been modified by comparing its 
initial seralized value and the current one. If they differ (i.e. the form has 
been modified) the function returns `true` which makes the browser displays 
a confirm prompt window to the user.

License
---

Copyright (c) 2012 Florent Guilleux

Licensed under the MIT license.
