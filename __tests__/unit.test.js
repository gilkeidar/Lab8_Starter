// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//  isPhoneNumber
test("123-456-7890 is a phone number", () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
})

test("000-000-0000 is a phone number", () => {
    expect(functions.isPhoneNumber("000-000-0000")).toBe(true);
})

test("1 is not a phone number", () => {
    expect(functions.isPhoneNumber("1")).toBe(false);
})

test("abcd is not a phone number", () => {
    expect(functions.isPhoneNumber("abcd")).toBe(false);
})

//  isEmail
test("a@b.com is a valid email", () => {
    expect(functions.isEmail("a@b.com")).toBe(true);
})

test("cloudstrife@finalfantasy.com is a valid email", () => {
    expect(functions.isEmail("cloudstrife@finalfantasy.com")).toBe(true);
})

test("toboldlygo is not a valid email", () => {
    expect(functions.isEmail("toboldlygo")).toBe(false);
})

test("123-456-7890 is not a valid email", () => {
    expect(functions.isEmail("123-456-7890")).toBe(false);
})

//  isStrongPassword
test("Mellon is a strong password", () => {
    expect(functions.isStrongPassword("Mellon")).toBe(true);
})

test("password is a strong password", () => {
    expect(functions.isStrongPassword("abcde")).toBe(true);
})

test("SDfjsdf35r!3fksghldaet4 is not a strong password", () => {
    expect(functions.isStrongPassword("SDfjsdf35r!3fksghldaet4")).toBe(false);
})

test("1234 is not a strong password", () => {
    expect(functions.isStrongPassword("1234")).toBe(false);
})

//`isDate
test("05/22/2023 is a valid date", () => {
    expect(functions.isDate("05/22/2023")).toBe(true);
})

test("1/1/1970 is a valid date", () => {
    expect(functions.isDate("1/1/1970")).toBe(true);
})

test("1 / 1 / 1970 is not a valid date", () => {
    expect(functions.isDate("1 / 1 / 1970")).toBe(false);
})

test("A long time ago in a galaxy far, far away... is not a valid date", () => {
    expect(functions.isDate("A long time ago in a galaxy far, far away...")).toBe(false);
})

//  isHexColor
test("#000000 is a valid hex color", () => {
    expect(functions.isHexColor("#000000")).toBe(true);
})

test("#FFFFFF is a valid hex color", () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
})

test("red is not a valid hex color", () => {
    expect(functions.isHexColor("red")).toBe(false);
})

test("The pale blue of Luke Skywalker's lightsaber, before it was digitally remastered is not a valid hex color", () => {
    expect(functions.isHexColor("The pale blue of Luke Skywalker's lightsaber, before it was digitally remastered")).toBe(false);
})