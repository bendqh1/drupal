<?php

# URL settings
    $wgSitename = "hanekudai";
    $wgServer = "http://localhost";
    $wgScriptPath = "/hanekudai";

## Database settings
    $wgDBtype = "mysql";
    $wgDBserver = "localhost";
    $wgDBname = "OMITTED";
    $wgDBuser = "OMITTED";
    $wgDBpassword = "OMITTED";
    $wgDBprefix = "";
    $wgDBTableOptions = "ENGINE=InnoDB, DEFAULT CHARSET=binary";

# Language settings
    $wgShellLocale = "C.UTF-8";
    $wgLanguageCode = "he";

# Extension settings
    wfLoadExtension( 'Cite' );
    wfLoadExtension( 'ParserFunctions' );

# Skin settings
    wfLoadSkin( 'Vector' );
    $wgDefaultSkin = "vector-2022";
