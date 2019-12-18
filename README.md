# UPDATED 2019-12-17 by [chorpler](https://github.com/chorpler/vscode-datetimestring-insert)
I'm changing the "formatted" part to use standard [Moment.js](https://momentjs.com) [formatting](https://momentjs.com/docs/#/displaying/) because why not.

Changes:

- Default format now uses whatever Moment.js uses for an empty string, which is ISO 8601, no fractional seconds
  - It comes out looking like this: `2019-01-01T06:23:44-06:00`.
  - In particular, notice there is now a numeric time zone on the end.
- Changed settings namespace to `insertMomentString`



# VSCode extension - Insert Moment String

<!-- [![Version][version-badge]][marketplace]
[![Installs][installs-badge]][marketplace]
[![Ratings][ratings-badge]][marketplace-ratings]

[![Dependencies][dependencies-badge]][dependencies]
[![License][license-badge]][LICENSE]

[![Donate][donate-badge]][donate] -->

A plugin for Visual Studio Code that inserts the current date and/or time according to configured format.
<!-- Available in [VisualStudio Marketplace][marketplace]. -->

<!-- **Notice** Version 2.0 changed settings namespace from `insertdatestring` to `insertDateString`. Please update your userspace and workspace settings. -->

## Installation

Open [Command Palette](https://code.visualstudio.com/docs/editor/codebasics) by pressing `F1`, type `ext install` and then look for **Insert Date String** extension.

## Usage

Following commands are available:

* `Insert DateTime` (<kbd>⇧</kbd>+<kbd>⌘</kbd>+<kbd>I</kbd> on OS X, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd> on Windows and Linux) - Inserts current date and/or time according to configured format (`format`) at the cursor position. 
* `Insert Date` - Inserts current date according to configured format (`formatDate`) at the cursor position. 
* `Insert Time` - Inserts current time according to configured format (`formatTime`) at the cursor position. 
* `Insert Timestamp String` - Inserts current timestamp in string format at the cursor position. Default is ISO 8601, no milliseconds.
  * **Default**: `YYYY-MM-DDTHH:mm:ssZ`
  * **Sample**: `2019-12-18T11:17:32-06:00`
* `Insert Timestamp Number` - Inserts current timestamp in milliseconds since start of epoch at the cursor position.
  * **Sample**: `1576689452343`
* `Insert Sortable` - Inserts sortable date and time according to configured format (`formatSortable`) at the cursor position.
  * **Default**: `YYYYMMDDhhmmss.SS`
  * **Sample**: `20191218111732.34`
* `Insert Readable` - Inserts a somewhat more human-readable date and time stamp according to configured format (`formatReadable`) at the cursor position.
  * **Default**: `YYYY-MM-DD HH:mm:ss`
  * **Sample**: `2019-12-18 11:17:32`
* `Insert Formatted DateTime` (<kbd>⇧</kbd>+<kbd>⌘</kbd>+<kbd>⌥</kbd>+<kbd>I</kbd> on OS X, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd> on Windows and Linux) - Prompt user for format and insert formatted date and/or time at the cursor position.

## Available settings

* Date and time format string (*this affects output of `Insert DateTime` and `Insert Timestamp String`, and the default format for `Insert Formatted DateTime`*):
* Date format string (*this affects `Insert Date` output*):
* Time format string (*this affects `Insert Time` output*):
* Sortable date and time format string (*this affects `Insert Sortable` output*):
* Readable date and time format string (*this affects `Insert Readable` output*):

```
// Date format to be used.
"insertMomentString.format": "YYYY-MM-DDTHH:mm:ssZ",
"insertMomentString.formatSort": "YYYYMMDDhhmmss.SS",
"insertMomentString.formatReadable": "YYYY-MM-DD HH:mm:ss",
"insertMomentString.formatDate": "YYYY-MM-DD",
"insertMomentString.formatTime": "HH:mm:ss",
```

## Syntax (see [MomentJS formatting](https://momentjs.com/docs/#/displaying/))

- **Y**     - A two digit representation of a year without leading zeros. Examples: 99 or 3
- **YY**    - A two digit representation of a year. Examples: 99 or 03
- **YYYY**  - A full numeric representation of a year, 4 digits. Examples: 1999 or 2003
- **M**     - Numeric representation of a month, without leading zeros. 1 through 12
- **MM**    - Numeric representation of a month, with leading zeros. 01 through 12
- **MMM**   - A short textual representation of a month, three letters. Jan through Dec
- **MMMM**  - A full textual representation of a month, such as January or March. January through December
- **D**     - Day of the month without leading zeros. 1 to 31
- **DD**    - Day of the month, 2 digits with leading zeros. 01 to 31
- **DDD**   - A textual representation of a day, three letters. Mon through Sun
- **DDDD**  - A full textual representation of the day of the week. Sunday through Saturday
- **H**     - 24-hour format of an hour without leading zeros. 1 through 12
- **HH**    - 24-hour format of an hour with leading zeros. 01 through 12
- **h**     - 12-hour format of an hour without leading zeros. 0 through 23
- **hh**    - 12-hour format of an hour with leading zeros. 00 through 23
- **m**     - Minutes without leading zeros. 0 through 59
- **mm**    - Minutes with leading zeros. 00 to 59
- **s**     - Seconds without leading zeros. 0 through 59
- **ss**    - Seconds with leading zeros. 00 to 59
- **S**     - Tenths of a second. 0 to 9
- **SS**    - Hundredths of a second. 00 to 99
- **SSS**   - Milliseconds. 000 to 999
- **x**     - Milliseconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
- **X**     - Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
- **A**     - Ante meridiem and Post meridiem. AM or PM
- **A**     - Ante meridiem and Post meridiem, lowercase. am or pm

### Time zone designators
- **Z**   - Time offsets from UTC in the form ±hh:mm. Examples:   +02:00, +02:30
- **ZZ**  - Time offsets from UTC in the form ±hhmm. Examples:    +0200,  +0230

### ISO-8601
- **iso**   - Simplified extended ISO format (ISO 8601) without miliseconds. The timezone is always zero UTC offset, as denoted by the suffix "Z".
- **e**     - Day of the week for locale. 0 (for Monday) through 6 (for Sunday)
- **E**     - ISO Day of the week. 1 (for Monday) through 7 (for Sunday)

### Examples

* UTC date and time: `iso` (2013-07-16T20:13:31Z)
* Year and month: `YYYY-MM` (2013-07)
* Complete date: `YYYY-MM-DD` (2013-07-16)
* Complete date plus hours, minutes, seconds and difference to GMT: `YYYY-MM-DDTHH:mm:ssZ` (2013-07-16T20:13:31+01:00)

## License

Released under the [MIT License][license].

[dependencies-badge]: https://david-dm.org/jsynowiec/vscode-insertdatestring/status.svg
[dependencies]: https://david-dm.org/jsynowiec/vscode-insertdatestring

[version-badge]: https://vsmarketplacebadge.apphb.com/version/jsynowiec.vscode-insertdatestring.svg
[marketplace]: https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring
[installs-badge]: https://vsmarketplacebadge.apphb.com/installs/jsynowiec.vscode-insertdatestring.svg
[ratings-badge]: https://vsmarketplacebadge.apphb.com/rating/jsynowiec.vscode-insertdatestring.svg
[marketplace-ratings]: https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring#review-details
[license-badge]: https://img.shields.io/github/license/jsynowiec/vscode-insertdatestring.svg
[license]: https://github.com/jsynowiec/vscode-insertdatestring/blob/master/LICENSE

[donate-badge]: https://img.shields.io/badge/☕-buy%20me%20a%20coffee-46b798.svg
[donate]: https://paypal.me/jaqb/5eur
