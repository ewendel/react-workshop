# Twitter API setup

Visit https://apps.twitter.com

Click "Create new app". Choose a random app name and description and use
"http://example.org" as app url.

Go to "Keys and Access Tokens". Create the file `task/twitter.json` with your
keys and tokens. The file should be on the following format:

```
{
    "consumer_key": "your key",
    "consumer_secret": "your secret",
    "access_token": "your access token",
    "access_token_secret": "your access token secret"
}
```

