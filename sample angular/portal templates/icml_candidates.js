var data = [
    {
      "File Path": "./advising/gradPlanner/required/required.icml",
      "Found in UI - (Green)": 173,
      "File Type": ".icml",
      "UI Path": "Index ? Census ? People ? Contacts",
      "Quick Summary": "Found in UI: Line 173 is instructional text for completing the form. Index?Program Admin?Programs?(expand one of the credit programs)?(click on \"Credit Requirements)",
      "Notes": "Line 173: Instructional text in the form.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../../lens/include/global.xsl', '../../../core/person/header.xsl', 'requiredTemplates.xsl']"
    },
    {
      "File Path": "./behavior/addEventParticipant.icml",
      "Found in UI - (Green)": "640 641 642 645 649 651",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Found in UI: Index?Behavior?Behavior Management?New?Add Event/Participant?Participant Details?(After searching and selecting a student, \"Display on  Portal\" checkbox will appear)",
      "Notes": "Lines 638-653: This is the code that will post on portal if check box is checked under the path found in the Quick Summary of this file. *Line 649: This is the label that displays, \"Display on Portal\".",
      "Related Files": "[none]",
      ".xsl Includes": "['../lens/include/globalLite.xsl', '../custom/custom.xsl', 'behaviorFile.xsl', 'behaviorEvent/behaviorEventGroupBIE.xsl', 'behaviorEvent/behaviorEventStateAZ.xsl', 'behaviorEvent/behaviorEventStateCA.xsl', 'behaviorEvent/behaviorEventStateCO.xsl', 'behaviorEvent/behaviorEventStateCT.xsl', 'behaviorEvent/behaviorEventStateFL.xsl', 'behaviorEvent/behaviorEventStateGA.xsl', 'behaviorEvent/behaviorEventStateIA.xsl', 'behaviorEvent/behaviorEventStateID.xsl', 'behaviorEvent/behaviorEventStateIL.xsl', 'behaviorEvent/behaviorEventStateIN.xsl', 'behaviorEvent/behaviorEventStateKS.xsl', 'behaviorEvent/behaviorEventStateKY.xsl', 'behaviorEvent/behaviorEventStateLA.xsl', 'behaviorEvent/behaviorEventStateMA.xsl', 'behaviorEvent/behaviorEventStateMD.xsl', 'behaviorEvent/behaviorEventStateME.xsl', 'behaviorEvent/behaviorEventStateMI.xsl', 'behaviorEvent/behaviorEventStateMN.xsl', 'behaviorEvent/behaviorEventStateMO.xsl', 'behaviorEvent/behaviorEventStateMT.xsl', 'behaviorEvent/behaviorEventStateNE.xsl', 'behaviorEvent/behaviorEventStateNH.xsl', 'behaviorEvent/behaviorEventStateNJ.xsl', 'behaviorEvent/behaviorEventStateNM.xsl', 'behaviorEvent/behaviorEventStateNV.xsl', 'behaviorEvent/behaviorEventStateNY.xsl', 'behaviorEvent/behaviorEventStateOH.xsl', 'behaviorEvent/behaviorEventStateOK.xsl', 'behaviorEvent/behaviorEventStatePA.xsl', 'behaviorEvent/behaviorEventStateRI.xsl', 'behaviorEvent/behaviorEventStateSD.xsl', 'behaviorEvent/behaviorEventStateTX.xsl', 'behaviorEvent/behaviorEventStateVA.xsl', 'behaviorEvent/behaviorEventStateVT.xsl', 'behaviorEvent/behaviorEventStateWA.xsl', 'behaviorEvent/behaviorEventStateWI.xsl', 'behaviorEvent/behaviorEventStateWY.xsl', 'behaviorEvent/behaviorEventStateXX.xsl', 'behaviorRole/behaviorRoleStateAZ.xsl', 'behaviorRole/behaviorRoleStateCA.xsl', 'behaviorRole/behaviorRoleStateIA.xsl', 'behaviorRole/behaviorRoleStateKS.xsl', 'behaviorRole/behaviorRoleStateKY.xsl', 'behaviorRole/behaviorRoleStateLA.xsl', 'behaviorRole/behaviorRoleStateMI.xsl', 'behaviorRole/behaviorRoleStateMN.xsl', 'behaviorRole/behaviorRoleStateNJ.xsl', 'behaviorRole/behaviorRoleStatePA.xsl', 'behaviorRole/behaviorRoleStateSD.xsl', 'behaviorRole/behaviorRoleStateTX.xsl', 'behaviorRole/behaviorRoleStateVA.xsl', 'behaviorRole/behaviorRoleStateXX.xsl']"
    },
    {
      "File Path": "./behavior/preference.icml",
      "Found in UI - (Green)": "8 17 155 158 160",
      "File Type": ".icml",
      "UI Path": "Index ? Behavior ? Admin ? Preferences",
      "Quick Summary": "Found in UI: Index?Behavior?Admin?Preferences",
      "Notes": "Line 8: Variable Name - \"'behavior/preference.icml?x=behavior.BehaviorPreference-listWithDefaults&amp;x=core.StaffMember-listActiveStaffForBehaviorReferral&amp;schoolID=schoolScope&amp;x=resource.PortalOptions'\"  Line 17: Variable Name - \"/campusRoot/PortalOptions/@behavior\" Line 155: \"Portal\" is in Label Name  Line 158: Reference to the \"Yes or No\" option in the dropdown box with the Label from line 155  Line 160: Reference the \"Yes or No\" option in the dropdown box with the Label from line 155",
      "Related Files": "[none]",
      ".xsl Includes": "['../lens/include/global.xsl']"
    },
    {
      "File Path": "./census/relatedPair/relatedPair.icml",
      "Found in UI - (Green)": "170 253 254 304 408 409 507 508",
      "File Type": ".icml",
      "UI Path": "Index ? Census ? People ? Relationships",
      "Quick Summary": "Found in UI: Index?Census?People?Relationships",
      "Notes": "Line 170: Label on a form column. The label name is \"Portal\". Line 253: Label on a form column. The label name is \"Portal\". Line 254: When Checkbox on \"Portal\" is \"checked\" (Line 253) ? \"{$r/@portal}\"  Line 308: Label on a form column. The label name is \"Portal\".  Line 408: Label on a form column. The label name is \"Portal\". Line 409: When Checkbox on \"Portal\" is \"checked\" (Line 253) ? \"{@portal}\".  Line 507: Label on a form column. The label name is \"Portal\".  Line 508: When Checkbox on \"Portal\" is \"checked\" (Line 253) ? \"{@portal}\".",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../../core/person/header.xsl']"
    },
    {
      "File Path": "./census/wizard/editRelationships.icml",
      "Found in UI - (Green)": "137 204",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Found in UI: Index?Census?(search name with multiple family members)?(\"Continue - Step 2)?(Save & Continue - Step 3)",
      "Notes": "Line 137: Label on a form for a checkbox column named \"Portal\" Line 204: This is the code to send the informtion out if any of the checkboxes are true.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./curriculum/preferences/templates/curriculumTemplates.icml",
      "Found in UI - (Green)": "169 173 177",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Grading & Standards ? Curriculum ? Curriculum Templates",
      "Quick Summary": "Found in UI: Index?System Administration?Grading & Standards?Curriculum?(New)?(Template Detail)? (Use dropdown box to choose \"Assignment\" and text field with the title \"Portal Description\" will appear)",
      "Notes": "Lines 169-179: These lines call a function that allows for a textbox to appear with \"Portal Description\" as the title(1).",
      "Related Files": "[curriculum/preferences/templates/curriculumTemplatesDT.xsl]",
      ".xsl Includes": "['../../../lens/include/global.xsl', 'curriculumTemplatesDT.xsl']"
    },
    {
      "File Path": "./grading/eTranscripts/eTranscriptProcessSub.icml",
      "Found in UI - (Green)": "172 286 361 436 519 596 675",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Found directly in th UI. Every line is text giving instructions on eTranscript. The path to each text block is included in the notes.",
      "Notes": "Line 172: Index?Transcripts?eTranscript?(click the search button and the text is at the top of the form. Line 286: Index?Transcripts?eTranscript?(click \"search\" button)?(click \"Hold\" and the text is at the top of the form) Line 361: Index?Transcripts?eTranscript?(click \"search\" button)?(click \"Remove Hold\" and the text is at the top of the form) Line 436: Index?Transcripts?eTranscript?(click \"search\" button)?(click \"Electronic Release\" and the text is at the top of the form) Line 519: Index?Transcripts?eTranscript?(click \"search\" button)?(click \"Group Release\" and the text is at the top of the form) Line 596: Index?Transcripts?eTranscript?(click \"search\" button)?(click \"Manual Release\" and the text is at the top of the form) Line 675: Index?Transcripts?eTranscript?(click \"search\" button)?(click \"Archive\" and the text is at the top of the form)",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./portal/activityDetail.icml",
      "Found in UI - (Green)": "11 12 13 14 24 25 26 46 54 58 103 150 202 216 255 259 315 409 427 433 485 543 605 640 661",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Found in Portal UI. Directly related to a portal function. Contains variables and references to files that style and display data on the portal.",
      "Notes": "Lines 11-14: Variable names and select values. Line 46: Variable name=\"URL\" for a cancantination of values. Line 54: Reference to Javascript file(1). Line 58: Reference to Javascript file (2). Line 103: Comment. Line 150: Submission within $(document).ready function. Line 202: Reference to \"portal/main.xsl\" Line 216: Reference to stylesheet (3). Line 255: <a class for \"Grade Book View For\". Line 259: Width tag for portalTable. Line 315: Width tag for portalTable. Line 409: Width tag for portalTable. Line 427: .xsl if statement id user clicks on \"Continue Assessment\". Line 433: .xsl if statement id user clicks on \"Start Assessment\"Line 485:  Width tag for portalTable. Line 543: Table ID for portalTableNested. Line 605: Width tag for portalTable. Line 640: Width tag for portalTable. Line 661: <a class for \"Grade Book View For\".",
      "Related Files": "(1)[portal/upload/assignmentUpload.js](2)[portal/upload/driveUpload.js](3)[portal\\portal.css]",
      ".xsl Includes": "['../../../../lens/include/globalLite.xsl', '../../delivery/itemDeliveryDT.xsl']"
    },
    {
      "File Path": "./portal/etranscript/eTranscriptProcessMain.icml",
      "Found in UI - (Green)": "27 28 38 49 60 81 110 175",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Found in Portal UI. Directly related to a portal function. Contains variables, text, and references to files that style and display data on the portal.",
      "Notes": "Line 27: <title> tag for \"Portal eTranscript\" Line 28: reference to stylesheet(1). Line 38: Var toolCode = \"portal.PortalETranscript\". Line 49: getElementById(2). Line 60: Variable to a URL (3)  Line 81: Variable to a URL (4) Line 110: Width tag for \"portalTable\". Line 175: Width tag for \"portalTable\".",
      "Related Files": "(1)[styles/portal/portal.css](2)[portal/etranscript/eTranscriptProcessMain.icml?x=portal.PortalETranscript-listTranscriptProcess&amp;calendarID=' + calendarID + '&amp;mode=detail&amp;lang=<xsl:value-of select=\"$selectedLang](3)[portal/etranscript/eTranscriptProcessNewRequest.icml?&amp;mode=main&amp;lang=<xsl:value-of select=\"$selectedLang\"/>&amp;x=portal.PortalETranscript-listAgreementText&amp;x=portal.PortalETranscript-listTranscriptProcess&amp;calendarID=]",
      ".xsl Includes": "['../lens/include/globalLite.xsl', '../lens/include/viewXhtml.xsl', 'lang/langDef.xsl']"
    },
    {
      "File Path": "./portal/etranscript/eTranscriptProcessNewRequest.icml",
      "Found in UI - (Green)": "32 43 91 133 139",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Found in Portal UI. Stylesheet reference, variables, and hidden inputs.",
      "Notes": "Line 32: Stylesheet reference (1) Line 43: vat toolCode \"portal.eTranscipt.eTranscriptProcessing. Line 91: runAtServer command ??. Line 133: hidden input \"portal.PortalETranscript-processETranscript\". Line 139:  hidden input requestedvia\" value=\"Portal\".",
      "Related Files": "(1)[styles/portal/portal.css]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../lang/langDef.xsl']"
    },
    {
      "File Path": "./portal/reports/portalRequestsReport/portalRequestsReport.icml",
      "Found in UI - (Green)": "6 13 85 86 102",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Portal ? Reports ? Portal Usage",
      "Quick Summary": "Found in UI: Located on line 102. Index?System Administration?Portal?Portal Request Summary? (it is the text at the top of the form)",
      "Notes": "Line 6: Varaible name - \"'Portal Request Summary Report'\" Line 13: var toolCode - \"portal.PortalRequestsReport\" Line 85: hidden field - \"portal.PortalRequestsReport-requestReport\" Line 86: \"portal/reports/portalRequestsReport/portalRequestsReport.fop\"(1) Line 102: This line applies the text \"'This report will generate a list of requests submitted via the portal, the date requested, the date processed, who processed the request, and the request status.'\" to the form.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../../lens/include/functions.xsl', '../lang/langDef.xsl', '../../custom/custom.xsl', 'updateRequestDialogSharedTemplates.xsl', '../../userRequest/userRequest.xsl']"
    },
    {
      "File Path": "./pos/fram/letterEditor/letterEditor.icml",
      "Found in UI - (Green)": "322 325 328 331 410 411 412 413 547 548 549 550 605 608 611 614",
      "File Type": ".icml",
      "UI Path": "Index ? FRAM ? Letter Editor ? Letter Editor",
      "Quick Summary": "Found in UI: All lines are in relation to a dropdown box for the language for a letter template. Index?FRAM?Letter Editor?Letter Editor (the text and options are found in the \"Language\" dropdown.",
      "Notes": "Line 322: Text in <xsl:value-of select> - \"English (Portal)\". Line 325: Text in <xsl:value-of select> - \"Spanish (Portal)\". Line 328: Text in <xsl:value-of select> - \"Simplified Chinese (Portal)\". Line 331: Text in <xsl:value-of select> - \"Traditional Chinese (Portal)\". Line 410: option value - \"English (Portal)\" Line 411: option value - \"Spanish (Portal)\" Line 412: option value - \"Simplified Chinese (Portal)\" Line 413: option value - \"Traditional Chinese (Portal)\" Line 547: option value - \"English (Portal)\" Line 548: option value - \"Spanish (Portal)\" Line 549: option value - \"Simplified Chinese (Portal)\" Line 550: option value - \"Traditional Chinese (Portal)\" Line 605: Text in <xsl:value-of select> - \"English (Portal)\". Line 608: Text in <xsl:value-of select> - \"Spanish (Portal)\". Line 611: Text in <xsl:value-of select> - \"Simplified Chinese (Portal)\". Line 614: Text in <xsl:value-of select> - \"Traditional Chinese (Portal)",
      "Related Files": "[none]",
      ".xsl Includes": "['../../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./pos/fram/onlineLetterEditor/onlineEditor.icml Luke is working these together ?",
      "Found in UI - (Green)": "190 311 316 394 413",
      "File Type": ".icml",
      "UI Path": "Index ? FRAM ? Letter Editor ? Online Application Editor",
      "Quick Summary": "Found directly in the UI. Contains text that has the user choose a lanaguage for an online letter template.",
      "Notes": "Line 190: This is a detailFrom.action in an .xsl when test tag. Line 311: Contains the text, \"Portal Language\" as the label of a dropdown box. Line 316:  Contains the text, \"Portal Language\" as the label of a dropdown box. Line 394: Javascript call named, \"rtnURLObj\" (not sure what that actually is, but it has 'PortalSelfServiceOptions\" in the path. Line 413:  Contains the text, \"Portal Language\" as the label of a dropdown box.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../../lens/include/global.xsl', 'letterEditorDT.xsl', 'approvalDenialDT.xsl', 'preApplicationDT.xsl', 'directCertDT.xsl', 'tempApprovalDT.xsl', 'verificationPreNotice1DT.xsl', 'verificationPreNotice2DT.xsl', 'verificationPostNoticeDT.xsl', 'processInBoxDT.xsl', 'wysiWygDT.xsl']"
    },
    {
      "File Path": "./resource/portal/portalOptions.icml",
      "Found in UI - (Green)": "6 9 10 13 36 80 81 82 83",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Portal ? Preferences ? Display Options",
      "Quick Summary": "Found in UI: Index?System Administration?Portal?Preferences? (Display Options tab)",
      "Notes": "Line 6: .xsl indlude(1) Line 9: Variable name - \"'Portal Options'\" (text found at top of form) Line 10: Varaible name - \"'resource/portal/portalOptions.icml?preferences=1&amp;x=calendar.Calendar-activeYearCalendars&amp;pattern=Terms&amp;x=resource.TranscriptPreference&amp;x=attendance.AttendanceUnit-positiveAttendanceSettings&amp;'\" Line 13: Variable name -  \"'resource.PortalOptions'\" Line 36: Variable name - \"'PortalOptions'\" Line 80: Hidden input - \"resource.PortalOptions,resource.TranscriptPreference\" Line 81: Text at the top of the form +Portal Options\". Line 82: Template name - \"PortalOptions\" Line 83: .xsl with param tag - <xsl:with-param name=\"portalOptions\" select=\"/campusRoot/PortalOptions\"/>",
      "Related Files": "(1)[portalOptionsDT.xsl]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../school/header.xsl', 'eTranscriptOptionsDT.xsl']"
    },
    {
      "File Path": "./resource/portal/portalSelfServiceOptions.icml",
      "Found in UI - (Green)": "5 9 10 13 17 19 20 30 31 32 33 40 41 42 43 68 69 70",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Portal ? Preferences ? Self Service",
      "Quick Summary": "Found in UI: Index?System Administration?Portal?Preferences?(Self Service tab)",
      "Notes": "Line 5: .xsl include tag (1) Line 9: Variable name - \"'Portal Options'\" (text found at the top of the form). Line 10: Variable name- \"'resource/portal/portalSelfServiceOptions.icml?x=calendar.Calendar-activeYearCalendars&amp;pattern=Terms&amp;'\" Line 13: Variable name - \"'portal.PortalSelfServiceOptions'\" Line 17: Variable name - \"portalID\" Line 19: 'xsl when test - \"/campusRoot/PortalSelfServiceOptions[@portalID and @portalID != '']\" Line 20: .xsl value-of select - \"/campusRoot/PortalSelfServiceOptions/@portalID\" Line 30: Variable name - \"'PortalSelfServiceOptions-loadTree'\" Line 31: Variable name - \"'portalID'\" Line 32: Variable name - \"$portalID\" Line 33: Variable name - \"objectPackage\" Line 40: Variable - name=\"patternObjectName\" select=\"'PortalSelfServiceOptions'\" Line 41: Variable - name=\"patternObjectID\" select=\"'portalID'\" Line 42: Variable - name=\"patternObjectIDValue\" select=\"$portalID\" Line 43: name=\"patternObjectPackage\" select=\"' Line 68: Header title at the top of the form shows text, \"Portal Options\" Line 69: This is a template call for \"PortalSelfServiceOptions\". Line 70: .xsl with-param - name=\"portalSelfServiceOptions\" select=\"/campusRoot/PortalSelfServiceOptions",
      "Related Files": "(1)[portalSelfServiceOptionsDT.xsl]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../school/header.xsl', 'portalOptionsDT.xsl']"
    },
    {
      "File Path": "./survey/surveyDesigner/surveyDesigner.icml",
      "Found in UI - (Green)": 290,
      "File Type": ".icml",
      "UI Path": "Index ? Surveys ? Survey Designer",
      "Quick Summary": "Found in UI: Index ? Surveys ? Survey Designer?(select a text)?(select \"from student filters\")?(click \"next\" button)",
      "Notes": "Line 290: Text from a radio button option - \"Student Portal Contacts\".",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', 'periodSchedule.xsl']"
    },
    {
      "File Path": "./system/preference/messenger/messengerSettings.icml",
      "Found in UI - (Green)": "59 61 64 67 68 69",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Messenger ? Messenger Preferences ? Messenger Settings",
      "Quick Summary": "Found in UI: Index?System Administration ?Messenger?Messenger Preferences?(Click on \"Messenger Settings\" tab)",
      "Notes": "Line 59: Header title \"Portal URL Settings\". Line 61: comment Line 64: Label text (required text). Line 67: Varaible name - \"MessengerPreferenceList/MessengerPreference[@element = 'PortalURL']/@value\" Line 68: textbox name. Line 69: direction text un the textbox - \"(URL to insert in messages directing parents to login to parent portal)",
      "Related Files": "[none]",
      ".xsl Includes": "['campusAttribute.icml', 'campusAttributeDT.xsl']"
    },
    {
      "File Path": "./system/schoolChoice/wizard/schoolChoicePortalOpt.icml",
      "Found in UI - (Green)": "20 111 117 123 171 172 187 216 217 219 220 309 311 318 320 354",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? School Choice ? Batch Updates",
      "Quick Summary": "Found in UI: Index ? System Administration ? School Choice ? Batch Updates",
      "Notes": "Line 20: This as a var toolcode - \"census.SchoolChoice.ParentPortalOption\" Line 111, 117, & 123: getElementById for \"portalOptions\" in an if/else statement (lines 109-127) Line 171: Form name containing the word \"portal\". Line 172: Hidden input - \"schoolChoice.SchoolChoiceApplicatHidion-portalOption\" Line 187: Instructional ext at the top of the page. Line 216 & 219: .xsl when test <tag>  - 'enablePortal' or 'disablePortal. Line217 &220: Text hat appears after the \"UPDATE APPLICATION\" button is clicked. The text will let the user know how many \"enabled\" or \"disabled\" applications have been updated. Line 309 & 318: Code for radio buttons with \"portal\" in the option. Line 311 & 320: Text containing \"portal\" in the radio button options. 311 - \"Enable Portal Acceptance\" 320 - \"Disable Portal Acceptance\". Line 354: Table formatting",
      "Related Files": "[none]",
      ".xsl Includes": "['../../../lens/include/global.xsl']"
    },
    {
      "File Path": "./system/schoolChoice/wizard/schoolChoiceWizard.icml",
      "Found in UI - (Green)": "290 293",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? School Choice ? Process Applications",
      "Quick Summary": "Found in UI: Index ? System Administration ? School Choice ? Process Applications",
      "Notes": "Line 290: Text label for a checkbox - \"Enable Portal\". Line 293: italicized text offering instructions on the aformetioned checkbox.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../../lens/include/globalLite.xsl', '../../../lens/icpl/util.xsl', '../../../lens/include/reportOptionTemplatesDP.xsl']"
    },
    {
      "File Path": "./user/accountManagement/eSignature.icml",
      "Found in UI - (Green)": "86 87 88",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? User Security ? User Preference Management ? Password Reset Configuration",
      "Quick Summary": "Found in UI: Index ? System Administration ? User Security ? E-Signature?(at the bottom of the page)",
      "Notes": "Line 86: Checkbox id Line 87: path when \"portal\" is checked - \"{$eSignature/@portal}\" Line 88: text - \"Portal",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/global.xsl']"
    },
    {
      "File Path": "./user/ldap2/ldapConfiguration.icml",
      "Found in UI - (Green)": "147 154 155",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? User Security ? LDAP Management ? LDAP Authentication ? LDAP Authentication",
      "Quick Summary": "Found in UI: Index?System Administration?User Security?LDAP Manaagement?LDAP Authentication?)click \"new\" at the top of the form)?(type in \"*LDAP Name\" and check the box labeled, \"Enable This LDAP Configuration\")",
      "Notes": "Line 147: This line enables a checkbox (the one that has portal in the label) for lines 154 and 155. Line 154: This is the code for the checkbox in line 155. Line 155: Label for check box, \"Use this configuration to enable Portal Login for SSO users.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../../resource/district/header.xsl']"
    },
    {
      "File Path": "./user/reports/accountAutomationLog/accountAutomationLog.icml",
      "Found in UI - (Green)": 66,
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? User Security ? Reports ? User Account Automation Log",
      "Quick Summary": "Found in UI: Index?System Administration?User Security?Reports?User Account Automation Log?(Go to \"Filer By\" dropdown box and select \"Disabled Accounts - Portal)",
      "Notes": "Line 66: This is an option value with the text, \"Diabled Accounts - Portal\".",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/global.xsl']"
    },
    {
      "File Path": "./user/reports/portalUsage/portalUsage.icml",
      "Found in UI - (Green)": "6 14 36 38 49 63",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? User Security ? User Preference Management ? Account Security Preferences",
      "Quick Summary": "Found in UI: Lines 6, 49. and 63 contain text in the UI. The other lines are hidden inputs and a var toolCode. Index?System Administration?Portal?Reports?Portal Usage",
      "Notes": "Line 6: Text at the top of the page \"Portal Usage Report\". Line 14: var tool Code - \"user.PortalUsage\" Line 36: hidden input - \"user.PortalUsage-usageReport\" Line 38: \"user/reports/portalUsage/portalUsage.fop\" Line 49: Text at the top of the form explaining what the form is about. Line 63: Text prompting user to enter in dates.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./user/security/accountSecurityPreferences.icml",
      "Found in UI - (Green)": 156,
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? User Security ? SAML Management ? SSO Account Configuration Wizard",
      "Quick Summary": "Found in UI: Index?System Administration?User Secuirty?User Preference Management?Account Security Preferences?(Under \"Homepage\" dropdownbox there is a checkbox that contains text containint the word \"portal\")",
      "Notes": "Line 156: HTML span element with \"automatically disable student accounts _ days after enrollment end date, and portal accounts for parents with no enrolled students",
      "Related Files": "[portal/reports/portalRequestsReport/portalRequestsReport.fop]",
      ".xsl Includes": "['../../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./user/sso/saml/samlConfig.icml",
      "Found in UI - (Green)": "132 135 138 366 479 480",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? User Security ? SAML Management ? SSO Service Provider Configuration",
      "Quick Summary": "Found in UI: Index?SystemAdministration?User Security?SAML Management?SSO Service Provider Configuration?(Show Campus SSO Preferences)?Text appears in the second checkbox beneath the radio buttons.",
      "Notes": "Line 132: Javascript numeric variable declaration \"portalSSOUsers\" Line 135: Ajax prism SAMLSPController getter for portalSSOUsers Line 138: Javascript some sort of setter Line 366: ExportAlias! False portal occurance Line 479:  HTML checkbox inside td (table) also contains a call to a JS function Line 480: HTML label aside the checkbox",
      "Related Files": "[none]",
      ".xsl Includes": "['../../../lens/include/globalLite.xsl', '../../../lens/include/reportOptionTemplates.xsl']"
    },
    {
      "File Path": "./user/userAccount/newAccount.icml",
      "Found in UI - (Green)": "58 60 69 71 91 92 103 108 112 221",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? User Security ? Users ? User Account",
      "Quick Summary": "Found in UI: Not sure on the direct navigation(ask Karla), but there is certainly an \"option value\" of \"Campus Portal\" in the setup of a \"New User\" account.",
      "Notes": "Line 58: XSLT variable name attribute has \"portal\" in \"portalPassReq\" Line 60: XSLT when test '@portalAuth -'ldap'' Line 69: XSLT variable name attribute 'nonPortalPassReq' Line 71: XSLT when test 'nonPortalPassReq' Line91: Javascript variable name ''portalPassReq\" and in its variable value, an XSLT value-of select command Line 92: Javascript, same as 91 but \"nonPortalPassReq\" Line 103: HTML comment Line 108: Javascript else if refering back to nonPortalPassReq seemingly as a boolean Line 112: javascript else if statement refering back to portalPassReq Line 221: homepage selection option string and its URL value",
      "Related Files": "[none]",
      ".xsl Includes": "['../../../lens/include/global.xsl', '../../../lens/include/functions.xsl']"
    },
    {
      "File Path": "./user/userAccountTypeWizard/userAccountTypeWizard.icml",
      "Found in UI - (Green)": "153 154",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? User Security ? Batch and Import Wizards ? User Account Type Wizard",
      "Quick Summary": "Found in UI: System Administration?User Security?Batch and Import Wizards?User Account Type Wizard?(User Homepage Dropdown contains the pertinent text)",
      "Notes": "Line 153: Pertains to Campus Portal option, which passes in \"portal\" as a value, presumably into prism. Line 154: Relates to the \"Student App\" option, which passes in \"portalStudent\" as a value instead.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../../lens/icml/CampusForm.xsl', 'userAccountDT.xsl', 'header.xsl']"
    },
    {
      "File Path": "./user/userNotice/userNotice.icml",
      "Found in UI - (Green)": "202 206 590 598",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Custom ? Custom Attribute",
      "Quick Summary": "Found in UI: Lines 202 & 206 are form column labels. Index?User Communication?Announcements",
      "Notes": "Line 202: This is a column label found in User Communication when a specific school is selected. Line 206: This is a column label found when \"All Schools\" is selected. Line 590: This is a boolean variable the is set to \"false\". It is found \"true\" if the user chooses the \"Portal\" checkbox. Line 598: This is a boolean variable the is set to \"false\". It is found \"true\" if the user chooses the \"Portal\" checkbox.",
      "Related Files": "[user/userNotice/userNoticeDT.xsl]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../../lens/include/reportOptionTemplates.xsl']"
    },
    {
      "File Path": "./curriculum/curriculumStandard_school/standard_school.icml Luke is Updating…This is a variable name with the select option as \"Portal Options:. It is not mentioned again in the file and I can find no Front end label with it.",
      "Found in UI - (Green)": 11,
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Data Utilities ? Combine Person",
      "Quick Summary": "Not directly in the UI. This is a variable name.",
      "Notes": "Line 11: Varaible name - \"'Portal Options'",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../../resource/school/header.xsl']"
    },
    {
      "File Path": "./custom/customAttribute/hrUserFieldsEditor.icml",
      "Found in UI - (Green)": 44,
      "File Type": ".icml",
      "UI Path": "Index ? Human Resources ? Administration ? User Fields",
      "Quick Summary": "Function in UI. File does NOT contain the label, but contains the function used if the checkbox (with label name \"Hide Portal\" is checked). UI Path: Index ? Human Resources ? Administration ? User Fields",
      "Notes": "Line 44: Calls function if \"showHidePortal\" checkbox is true of false.",
      "Related Files": "[system\\campusAttribute\\campusAttributeDT.xsl]",
      ".xsl Includes": "['../../system/campusAttribute/campusAttribute.icml', '../../system/campusAttribute/campusAttributeDT.xsl']"
    },
    {
      "File Path": "./dataUtility/combinePerson/combinePerson.icml",
      "Found in UI - (Green)": 624,
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Data Utilities ? Languages/Translations ? Translations",
      "Quick Summary": "Not directly found in UI. Line 624 contains language to return to Portal login page if too much time has passed. UI Path: Index ? System Administration ? Data Utilities ? Languages/Translations ? Translations",
      "Notes": "Line 624: Returns user to the portal login page if they have timed out.",
      "Related Files": "[portal/main.xsl]",
      ".xsl Includes": "['../../system/campusAttribute/campusAttribute.icml', '../../system/campusAttribute/campusAttributeDT.xsl']"
    },
    {
      "File Path": "./dataUtility/translationEditor/TranslationLocaleMessage.icml Luke is Updating…This is part of a xsl: choose/when test statement. It is for when @name='Portal'. I cannot find any instance of portal in the UI from the path indicated and I have not figured out what the when statement is referring to.",
      "Found in UI - (Green)": 285,
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI, but calls a .xsl file for a \"treeNode\" template.",
      "Notes": "Line 285: .xsl \"when test\" tag. Calls for treeNode template (1).",
      "Related Files": "[lens\\icml\\CampusFormElement.xsl] Starting at Line: 3660",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./fees/feesEditor.icml",
      "Found in UI - (Green)": 46,
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly found in UI. It is a boolean variable with a \"false\" default value.",
      "Notes": "Line 46: This is a variable named \"fromPortal\". It is boolean and the default value is \"false\". It can refer back to a .xsl file when fromPortal is true. It also refers to over 600 \"if\" statements that contain \"fromPortal\" throughout other files and file types. Those will be addressed individually in their actual file documentation.",
      "Related Files": "[fees.xsl]",
      ".xsl Includes": "['../../lens/include/global.xsl', 'TranslationLocaleMessageDT.xsl']"
    },
    {
      "File Path": "./grading/student/student.icml",
      "Found in UI - (Green)": 112,
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in th UI. This is a reference to a classbook function.",
      "Notes": "Line 112: <a href - \"teaching/student/student.icml?calendarID=calendarCookie&amp;structureID=structureScope&amp;x=teaching.ClassbookDetail&amp;sectionID={@sectionID}&amp;personID={$personID}&amp;x=calendar.Calendar-loadCalendarStructure&amp;x=grading.GradingDetail-loadStudent&amp;showDropped=true&amp;outline=grading.Student&amp;x=resource.PortalOptions-loadByCalendarID&amp;orderStandards=1",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', 'templateView.xsl']"
    },
    {
      "File Path": "./instructionalManagement/onlineAssessment/delivery/deliveryPreviewItem.icml",
      "Found in UI - (Green)": 19,
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI. This is a call to a .css stylesheet.",
      "Notes": "Line 19: Call to a .css style sheet (1).",
      "Related Files": "(1)[styles/portal/portal.css]",
      ".xsl Includes": "['../../../lens/include/global.xsl']"
    },
    {
      "File Path": "./instructionalManagement/onlineAssessment/reports/itemAnalysis/itemAnalysisPreview.icml",
      "Found in UI - (Green)": 17,
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Portal ? Reports ? Portal Request Summary",
      "Quick Summary": "Not directly in the UI. This is a call to a .css stylesheet.",
      "Notes": "Line 19: Call to a .css style sheet (1).",
      "Related Files": "(1)[styles/portal/portal.css]",
      ".xsl Includes": "['../../../lens/include/viewXhtml.xsl', '../../../lens/include/globalLite.xsl', 'itemDeliveryDT.xsl']"
    },
    {
      "File Path": "./portal/fram/framWizardAddIncomeDialog.icml",
      "Found in UI - (Green)": "307 320",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Table formatting for \"portalTable\".",
      "Notes": "Line 307: Table formatting. Line 320: Table formatting.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../lang/langDef.xsl']"
    },
    {
      "File Path": "./portal/onlineAssessment/launchOnlineAssessment.icml",
      "Found in UI - (Green)": "18 19 20 21 22 23",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "All lines are variable names. No other references or calls in file.",
      "Notes": "Lines 18-23: These lines are all varaible names.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../lang/langDef.xsl', '../../custom/custom.xsl']"
    },
    {
      "File Path": "./portal/onlineAssessment/onlineAssessmentResponse.icml",
      "Found in UI - (Green)": "10 21 22 24 25",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "All lines are variable names. No other references or calls in file.",
      "Notes": "Lines 10,21-22, 24-25: These lines are all varaible names.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../../lens/include/viewXhtml.xsl', '../lang/langDef.xsl', '../../instructionalManagement/onlineAssessment/delivery/launchOnlineAssessmentDT.xsl']"
    },
    {
      "File Path": "./portal/portalCensusSelfService/newContactExistingPerson.icml",
      "Found in UI - (Green)": "12 77 155",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Nor really associated with any direct UI labels or text.",
      "Notes": "Line 12: .xsl include tag (1). Line 77: Image file (2) Line 155: hidden field \"portal.censusSelfService.nonHHContacts",
      "Related Files": "(1)[portalRequestDenyDisplay.icml](2)[images/portal/alert.png]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../lang/langDef.xsl', '../../instructionalManagement/onlineAssessment/delivery/onlineAssessmentDeliveryDT.xsl']"
    },
    {
      "File Path": "./portal/portalCensusSelfService/portalRequestDeny.icml",
      "Found in UI - (Green)": 5,
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly found in UI, but does reference a portal file.",
      "Notes": "Line 5: .xsl include tag (1)",
      "Related Files": "(1)[portalRequestDenyDisplay.icml]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../../lens/include/functions.xsl', 'updateRequestDialogSharedTemplates.xsl', '../../userRequest/userRequest.xsl', '../../custom/custom.xsl', '../lang/langDef.xsl', 'portalRequestDenyDisplay.icml']"
    },
    {
      "File Path": "./portal/portalCensusSelfService/processor.icml",
      "Found in UI - (Green)": "14 24 31 56 59 109 259",
      "File Type": ".icml",
      "UI Path": "Index ? Census ? Portal Request Processor",
      "Quick Summary": "Not directly in UI, but names variables, Javascript files, and Frame details.",
      "Notes": "Line 14: Variable - \"concat('portal/portalCensusSelfService/processor.icml?quickRequestID=', $quickRequestID)\" Line 24: Variable - \"'UserRequest-portalProcessorLoad'\" Line 31: Variable - \"objectContext\" select=\"'&amp;caller=portalProcessor&amp;x=user.SSNSecurity&amp;preferences=1&amp;dictionary=Identity&amp;x=core.RaceEthnicity-listActive'\" Line 56: Master frame call. Line 59: Detail frame call. Line 109: For each statement that calls - \"$requestDef/Tool[contains( @toolCode, 'portal') and @toolCode = $userTools//OutlineNode/@toolCode]\" Line 259: Javascript file - (1)\"portal/portalCensusSelfService/pcssSharedLogic.js\" passthrough=\"true",
      "Related Files": "(1)[portal/portalCensusSelfService/pcssSharedLogic.js]",
      ".xsl Includes": "[none]"
    },
    {
      "File Path": "./portal/portalCensusSelfService/removeNonHHContactDialog.icml",
      "Found in UI - (Green)": "8 78",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI. There is a variable name and hidden field.",
      "Notes": "Line 8: Variable - \"isProcessor\" select=\"saxon:if(/campusRoot/Header/User/toolRights//OutlineNode[@toolCode = 'portal.censusSelfService.nonHHContacts']/@write='true', 'true', 'false')\" Line 78: This is a hidden filed - \"portal.censusSelfService.nonHHContacts",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../../lens/include/functions.xsl', 'processorDT.xsl', '../../userRequest/userRequestSharedTemplates.xsl']"
    },
    {
      "File Path": "./portal/portalCensusSelfService/updateDemographicsDialog.icml",
      "Found in UI - (Green)": "15 33 34 183 247",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI. There are parameters of <call-template>, variable names, and a comment.",
      "Notes": "Line 15: This is a parameter of a \"call-template\" tag in .xsl. Line 33:  Variable name - \"/campusRoot/PortalSelfServiceOptions\" Line 34: Variable name - \"saxon:if(/campusRoot/Header/User/toolRights//OutlineNode[@toolCode = 'portal.censusSelfService.studentDemographics']/@write='true', 'true', 'false')\" Line 183: Comment Line 247:  This is a parameter of a \"call-template\".",
      "Related Files": "[None]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../lang/langDef.xsl', '../../custom/custom.xsl', 'updateRequestDialogSharedTemplates.xsl']"
    },
    {
      "File Path": "./portal/portalCensusSelfService/updateFamilyContactDialog.icml",
      "Found in UI - (Green)": "8 9 24 61",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI. There are parameters of <call-template>, variable names, and an image file reference.",
      "Notes": "Line 8: Variable name - \"/campusRoot/PortalFamilyContact/Person\" Line 9: Variable name - saxon:if(/campusRoot/Header/User/toolRights//OutlineNode[@toolCode = 'portal.censusSelfService.hhContacts']/@write='true', 'true', 'false')\" Line24: (1)Reference to image file. Line 61: This is a parameter of a \"call-template\" tag in .xsl.",
      "Related Files": "(1)[images/portal/alert.png]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../lang/langDef.xsl', '../../custom/custom.xsl', 'updateRequestDialogSharedTemplates.xsl', '../../core/identity/raceEthnicitySharedTemplates.xsl', '../../userRequest/userRequest.xsl']"
    },
    {
      "File Path": "./portal/portalCensusSelfService/updateFamilyRelationshipDialog.icml",
      "Found in UI - (Green)": "9 41 52 78",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI. There is a variable name, a hidden field, and two references to an image file with \"portal\" in the path.",
      "Notes": "Line 9: Variable name - \"saxon:if(/campusRoot/Header/User/toolRights//OutlineNode[@toolCode = 'portal.censusSelfService.hhRelationships']/@write='true', 'true', 'false')\" Line 41: (1)Reference to image file Line 52: (1)Reference to image file. Line 78: This is a hidden field - \"portal.censusSelfService.hhRelationships",
      "Related Files": "(1)[images/portal/questionMark_Blue.png]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../lang/langDef.xsl', '../../custom/custom.xsl', '../../userRequest/userRequest.xsl', 'updateRequestDialogSharedTemplates.xsl']"
    },
    {
      "File Path": "./portal/portalCensusSelfService/updateHouseholdAddressDialog.icml",
      "Found in UI - (Green)": "10 146 394",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI. There is a variable name, a hidden field, and a reference to an image file with \"portal\" in the path.",
      "Notes": "Line 10: Variable name - \"saxon:if(/campusRoot/Header/User/toolRights//OutlineNode[@toolCode = 'portal.censusSelfService.householdAddress']/@write='true', 'true', 'false')\" Line 146: (1)Reference to image file. Line 394: hidden field - \"portal.censusSelfService.householdAddress",
      "Related Files": "[images/portal/alert.png]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../lang/langDef.xsl', '../../custom/custom.xsl', 'updateRequestDialogSharedTemplates.xsl']"
    },
    {
      "File Path": "./portal/portalCensusSelfService/updateHouseholdPhoneDialog.icml",
      "Found in UI - (Green)": "10 54",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI. There is a variable name and hidden field.",
      "Notes": "Line 10: Variable name - \"saxon:if(/campusRoot/Header/User/toolRights//OutlineNode[@toolCode = 'portal.censusSelfService.householdPhone']/@write='true', 'true', 'false')\" Line 54: hidden field - \"portal.censusSelfService.householdPhone",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../lang/langDef.xsl', '../../custom/custom.xsl', 'updateRequestDialogSharedTemplates.xsl', '../../census/address/addressDT.xsl', '../../userRequest/userRequest.xsl']"
    },
    {
      "File Path": "./portal/portalCensusSelfService/updateNonHHContactDialog.icml",
      "Found in UI - (Green)": "10 58 72 110 150 174 196 201",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI. There are  image files, a variable name, some parameter and template calls, a comment; and a div ID.",
      "Notes": "Line 10: Variable name - \"saxon:if(/campusRoot/Header/User/toolRights//OutlineNode[@toolCode = 'portal.censusSelfService.nonHHContacts']/@write='true', 'true', 'false')\" Line 58: (1)reference to image file. Line 72: Comment Line 110: call-template name Line150: (2)reference to image file. Line 174: This is a parameter of call-template. Line 196: Template name Line201: <div Id name>",
      "Related Files": "(1)[images/portal/alert.png] (2)[images/portal/questionMark_Blue.png]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../lang/langDef.xsl', '../../custom/custom.xsl', 'updateRequestDialogSharedTemplates.xsl']"
    },
    {
      "File Path": "./scheduling/coursePlanTemplate/coursePlanTemplate.icml",
      "Found in UI - (Green)": 61,
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI, but calls a .js file.",
      "Notes": "Line 61: calls a javascript file (1)",
      "Related Files": "[portal/coursePlanner.js]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../district/header.xsl']"
    },
    {
      "File Path": "./student/schedule/schedule.icml",
      "Found in UI - (Green)": 163,
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI, but references a file path with \"Portal\" in the path.",
      "Notes": "Line 163: <a href - \"teaching/student/student.icml?calendarID=calendarCookie&amp;structureID=structureScope&amp;x=teaching.ClassbookDetail&amp;sectionID={../@sectionID}&amp;personID={$personID}&amp;x=calendar.Calendar-loadCalendarStructure&amp;x=grading.GradingDetail-loadStudent&amp;showDropped=true&amp;outline=scheduling.StudentSchedule&amp;x=resource.PortalOptions-loadByCalendarID&amp;orderStandards=1",
      "Related Files": "[teaching/student/student.icml]",
      ".xsl Includes": "['../../../lens/include/global.xsl', 'testRequirementsDT.xsl']"
    },
    {
      "File Path": "./system/campusAttribute/attributeDictionaryEditor.icml",
      "Found in UI - (Green)": 67,
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Custom ? Attribute/Dictionary ? Attribute/Dictionary",
      "Quick Summary": "This a function in the UI that defaults to \"true\". There is no text pertaining to portal.",
      "Notes": "Line 67: Function name - \"ic:showHidePortal",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./system/campusAttribute/devCampusAttributeEditor.icml",
      "Found in UI - (Green)": 487,
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Developer ONLY ? Attribute/Dictionary",
      "Quick Summary": "This a function in the UI that defaults to \"true\". There is no text pertaining to portal.",
      "Notes": "Line 487: Function name - \"ic:showHidePortal",
      "Related Files": "[none]",
      ".xsl Includes": "['campusAttribute.icml', 'campusAttributeDT.xsl']"
    },
    {
      "File Path": "./system/campusAttribute/spaCampusAttributeEditor.icml",
      "Found in UI - (Green)": 466,
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "This a function in the UI that defaults to \"false\". There is no text pertaining to portal.",
      "Notes": "Line 487: Function name - \"ic:showHidePortal",
      "Related Files": "[none]",
      ".xsl Includes": "['campusAttribute.icml', 'campusAttributeDT.xsl']"
    },
    {
      "File Path": "./user/accountMaintenance/accountMaintenance.icml",
      "Found in UI - (Green)": 7,
      "File Type": ".icml",
      "UI Path": "Index ? Account Settings",
      "Quick Summary": "Not directly in the UI. Calls a .xsl file.",
      "Notes": "Line 7: .<xsl import href> for a .xsl file. (1)",
      "Related Files": "(1)[portal/eSignature/util.xsl]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./user/accountMaintenance/updateEmail.icml",
      "Found in UI - (Green)": "7 43",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI. This file calls an import for a .xsl file and defines a .xsl param.",
      "Notes": "Line 7: .<xsl import href> for a .xsl file. (1) Line 43: <xsl param name=\"portal\". This is selected as \"false\".",
      "Related Files": "(1)[portal/eSignature/util.xsl]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./user/accountMaintenance/updatePassword.icml",
      "Found in UI - (Green)": "7 40",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not directly in the UI. This file calls and import for an .xsl file and has a variable name.",
      "Notes": "Line 7: .<xsl import href> for a .xsl file. (1) Line 40:  Variable name - \"portal\".",
      "Related Files": "(1)[portal/eSignature/util.xsl]",
      ".xsl Includes": "['updateEmailDT.xsl', '../../lens/include/globalLite.xsl', 'manageSuccessURL.xsl']"
    },
    {
      "File Path": "./user/userAccount/userAccount.icml",
      "Found in UI - (Green)": "70 92 95 269 270 328",
      "File Type": ".icml",
      "UI Path": "Index ? Student Information ? Academic Planning ? Course Plan",
      "Quick Summary": "Not directly found in UI. Contains a comment, variables, and some \"if\" statements.",
      "Notes": "Line 70: This is a comment. Line 92: This is an \"if\" statement related to the users homepage being, \"Campus Portal\". Line 95: This is an \"if\" statement related to the users homepage being, \"Campus Portal\" Line 269: XSLT if-test @hidePortalSSO Line 270: javascript if homepage.indexOf(\"portal\") doesn't equal -1  Line 328: Another \"if\" statement referring tothe \"Portal\" homepage.",
      "Related Files": "[user/userAccount/userRights.icml] [user/userAccount/userAccountDT.xsl]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', 'groupMemberDT.xsl']"
    },
    {
      "File Path": "./advising/gradPlanner/coursePlan.icml",
      "Found in UI - (Green)": "84 85 108",
      "File Type": ".icml",
      "UI Path": "Index ? Student Information ? Academic Planning ? Progress",
      "Quick Summary": "Referring to a file name with \"portal\" in the name that contains an image.",
      "Notes": "Line 84: Comment  Line 85: Comment Line 108: \"Portal\" points to a 'html file(1). Within that file, there are two references to an image image file (2) Does not effect the UI.",
      "Related Files": "(1)[coursePlanner.html] (2)[images/portal/x.png]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../../core/person/header.xsl']"
    },
    {
      "File Path": "./advising/gradPlanner/progress/progress.icml",
      "Found in UI - (Green)": "222 305",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Finance ? Payments ? Payment Transaction State",
      "Quick Summary": "Referring to a file name with \"portal\" in the name that contains an image.",
      "Notes": "Line 222: \"Portal\" points to an image file(1) Line 305: Comment",
      "Related Files": "(1)[images/portal/x.png]",
      ".xsl Includes": "['../../../lens/include/global.xsl', '../../../core/person/header.xsl', 'progressTemplates.xsl']"
    },
    {
      "File Path": "./finance/payments/paymentTransactionReport.icml",
      "Found in UI - (Green)": 74,
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "This is a hidden input type for \"finance.payments.onlinepayments.PortalOnlineTransaction-transactionHistory",
      "Notes": "Line 74: This is a hidden input type. There are many references to the \"finance.payments.onlinepayments.PortalOnlineTransaction-transactionHistory\", but most of them seem to lead to a .groovy file(1)",
      "Related Files": "(1)[WEB-INF\\catTest\\com\\infinitecampus\\automated\\test\\olp\\exclude\\OLPUtil.groovy]",
      ".xsl Includes": "['../../lens/include/global.xsl', 'exceptionDT.xsl']"
    },
    {
      "File Path": "./health/event/event.icml",
      "Found in UI - (Green)": 85,
      "File Type": ".icml",
      "UI Path": "Index ? Student Information ? Health ? General ? Health Visits",
      "Quick Summary": "Does not seem to be functional at all.",
      "Notes": "Line 85: This line is some warning text about this particular function being decommissioned in July of 2010. Cannot find the text anywherein the application. The text is as follows: \"ATTENTION: Data entry using the Health Visits functionality is scheduled to be decommissioned in the July 2010 release. If not already complete, users should begin to prepare for the transition to utilize the Health Office Visit tools which were released in July 2009 (2009.2). Please contact your Infinite Campus administrator for more detailed information available in the release notes and additional materials via the customer portal.",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./portal/portalCensusSelfService/portalRequestDenyDisplay.icml",
      "Found in UI - (Green)": 5,
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "This is a comment",
      "Notes": "Line 5: comment",
      "Related Files": "[none]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', 'portalRequestDenyDisplay.icml']"
    },
    {
      "File Path": "./scheduling/schedulingRule/coursePrerequisite.icml",
      "Found in UI - (Green)": "81 404",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "Not in UI. Both lines reference an image file with the word \"portal\".",
      "Notes": "Line 81: Makes a reference to an image file with \"portal\" in the file name (1). Line 404: Makes a reference to an image file with \"portal\" in the file name (1).",
      "Related Files": "(1)[image/potral/x.png]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../../adhoc/templates/adHocSelect2.xsl', '../../lens/include/reportOptionTemplates.xsl', '../../custom/custom.xsl']"
    },
    {
      "File Path": "./student/program/courseRequirements/courseRequirements.icml",
      "Found in UI - (Green)": "79 201",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "The two instances of \"portal\" are in the name of an image file.",
      "Notes": "Line 79: Reference to an image file(1). Line 201: Reference to an image file(1).",
      "Related Files": "(1)[images/portal/x.png]",
      ".xsl Includes": "['../../../lens/include/global.xsl']"
    },
    {
      "File Path": "./finance/generalLedger/subsystem/posRevenueFinanceAccounts.icml Luke is Updating…Still cannot fing the \"General Ledger\" anywhere. I am assuming that I do not have security rights to that page.",
      "Found in UI - (Green)": 121,
      "File Type": ".icml",
      "UI Path": "Index ? Point of Sale ? Food Service GL Accounts ? POS Revenue GL Accounts",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./finance/payments/districtReport.icml Luke is Updating…The UI path indicated does not exist in my UI. I haven't looked any further to find out why.",
      "Found in UI - (Green)": "19 28 81 186",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../../lens/include/global.xsl']"
    },
    {
      "File Path": "./finance/payments/districtReport_bg.icml",
      "Found in UI - (Green)": "22 31 107 266",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./finance/payments/exceptionWizard.icml",
      "Found in UI - (Green)": "355 364",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Finance ? Payments ? Reports ? Payment Transaction Report",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./hr/personnel/addWizard/addWizard.icml",
      "Found in UI - (Green)": 67,
      "File Type": ".icml",
      "UI Path": "Index ? Human Resources ? Personnel ? Add Personnel Wizard",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../../core/person/header.xsl', 'eventDT.xsl', '../resolution/resolutionDT.xsl']"
    },
    {
      "File Path": "./stateReporting/mi/membershipReportAlphaListOptions.icml",
      "Found in UI - (Green)": "54 71",
      "File Type": ".icml",
      "UI Path": "Index ? MI State Reporting ? Alpha List Report",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/global.xsl']"
    },
    {
      "File Path": "./student/program/compoundRequirements/compoundRequirements.icml",
      "Found in UI - (Green)": "99 186",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./teaching/student/student.icml",
      "Found in UI - (Green)": "16 18 19 28 29 62 63 66 70 100 545 650",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../../lens/include/globalLite.xsl', '../../../lens/icpl/util.xsl', '../../../lens/include/reportOptionTemplatesDP.xsl']"
    },
    {
      "File Path": "./teaching/student/studentPortalView.icml",
      "Found in UI - (Green)": "16 18 19 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 90 91 94 98 128 373 374 628 718",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl']"
    },
    {
      "File Path": "./census/studentContact/studentContact.icml Luke is Updating… I think this is in the \"Household tab\" and possibly after creating a new person. I currently do not have access to that part of the application due to a security rights issue.",
      "Found in UI - (Green)": "216 217",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Resources ? Resources ? School Standards",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/global.xsl', '../../core/person/header.xsl']"
    },
    {
      "File Path": "./resource/eTranscript/eTranscriptOptions.icml",
      "Found in UI - (Green)": "72 73",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "",
      ".xsl Includes": "['../../../lens/include/global.xsl', 'appInstructionsDT.xsl', 'signerConfirmDT.xsl', 'householdMemberDT.xsl', 'studentDT.xsl', 'incomeDT.xsl', 'reviewDT.xsl', 'submitDT.xsl', 'authorizationDT.xsl', 'elecSignDeclineDT.xsl', 'letterToHouseholdDT.xsl']"
    },
    {
      "File Path": "./resource/portal/pushNotificationPreferences.icml EASY ONCE I GET THROUGH THE SECURITY THING",
      "Found in UI - (Green)": "10 59 69",
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Portal ? Preferences ? Mobile",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/global.xsl', 'portalSelfServiceOptionsDT.xsl', '../district/header.xsl']"
    },
    {
      "File Path": "./student/program/testRequirements/testRequirements.icml",
      "Found in UI - (Green)": "78 95 197",
      "File Type": ".icml",
      "UI Path": "",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../../lens/include/global.xsl', 'courseRequirementsDT.xsl']"
    },
    {
      "File Path": "./system/auditTrail/reportOptions.icml",
      "Found in UI - (Green)": 129,
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? Data Change Tracker ? Data Change Tracker Report",
      "Quick Summary": "Cannot find \"Data Change Tracker\" in UI",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', '../savedSurveyList.xsl', '../../adhoc/filters/savedFilterList.xsl']"
    },
    {
      "File Path": "./user/accountManagement/accountManagement.icml",
      "Found in UI - (Green)": 156,
      "File Type": ".icml",
      "UI Path": "Index ? System Administration ? User Security ? E-Signature",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/globalLite.xsl', 'updatePasswordDT.xsl', 'manageSuccessURL.xsl']"
    },
    {
      "File Path": "./user/sso/saml/samlAccountWizard.icml",
      "Found in UI - (Green)": "68 70 72 78 79 80 82 161 163 215 230 231 234 235 239 415",
      "File Type": ".icml",
      "UI Path": "Index ? User Communication ? Announcements",
      "Quick Summary": "",
      "Notes": "",
      "Related Files": "[]",
      ".xsl Includes": "['../../lens/include/global.xsl', 'usernameGenerationTemplating.xsl']"
    }
  ]
  