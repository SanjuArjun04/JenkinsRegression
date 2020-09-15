package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources",glue= {"com/stepdefinition"} ,monochrome=true,plugin= {"pretty",
		"junit:src\\test\\resources\\Reporting\\cucumber.xml",
		"json:src\\test\\resources\\Reporting\\cucumber.json",
		"html:src\\test\\resources\\Reporting"
		}, snippets=SnippetType.CAMELCASE)

public class TestRunner {

}

