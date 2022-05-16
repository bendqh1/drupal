# PHP RtL Contact Form

A CMS-agnostic backend-frontend simple contact form for one recipient which is aimed solely for Right to Left (RtL) languages and allows appointment setting to allow service sale automation (SSA) for freelancers or SMEs (with normally one person handling emails).

## Software requirments

This program requires:

* A well configured *DNS records hosting*
* A well configured *website hosting* 
* A well configured *website emails hosting* comprised by itself of:
  * Local Email Server (**LES**) such as *Postfix*
  * Local Email Protocoler (**LEP**) such as *Dovecot*
  * Local Email Client (**LEC**) such as *Roundcube*

## Installation

Respectively run the following commands:

```shell
# cd WEBSITE_DIRECTORY
# rm -rf prcf
# git clone
sed -i "s/https:\/\/example.com/https:\/\/*****DOMAIN*****/g" prcf/html/success/success_index.php &&
sed -i "s/\$to = 'example@example.com'/\$to = '*****EMAIL*****'/g" prcf/backend/form.php
```

## Language

It was originally designed in Hebrew but one should be able to change the Hebrew to any other RtL language such as Arabic, Aramaic, Persian/Farsi, Azeri, Urdu, Kurdish (Sorani), Dhivehi/Maldivian and probably more.

## Notes

* One might want to ensure that any PHP file is not accessible by a browser, to prevent an hardcoded email address from being leaked to spambots
