Time select replacement using chosen.js
--

We were not satisfied with the regular time selection widgets out there, so we wrote a quick wrapper
for chosen.js to provide us with a way to select the time in as little as 2 keystrokes... rad!

Example:
--

```
<select data-placeholder="Choose time..." class="chzn-time"></select>
$('chzn-time').chosenTime();
```

.. that's it!

Requirements:
--
- chosen.js https://github.com/harvesthq/chosen


