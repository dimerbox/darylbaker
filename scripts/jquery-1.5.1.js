



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled emoji-size-boost is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-3c1694fab1568340f2e75b26efa1f55d97c5153364a7357e9e1104c718ff1a2f.css" integrity="sha256-PBaU+rFWg0Dy51sm76H1XZfFFTNkpzV+nhEExxj/Gi8=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-3e95d73eb454e0099947df00d91ab0dbfc6b10be69dd5daf5de7aeb676580d20.css" integrity="sha256-PpXXPrRU4AmZR98A2Rqw2/xrEL5p3V2vXeeutnZYDSA=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-f8175c23360b42a4eb18b2319fefeae252cfeea482fb804356f4136a52bfddb3.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-1502104f450cb05859f99b57e29782e071e3fb240e237adb8cbf17ebbdb271c7.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jquery.videoBG/jquery-1.5.1.js at master · sydlawrence/jquery.videoBG</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/82717?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="sydlawrence/jquery.videoBG" name="twitter:title" /><meta content="jquery.videoBG - Adding HTML5 video backgrounds to websites" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/82717?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="sydlawrence/jquery.videoBG" property="og:title" /><meta content="https://github.com/sydlawrence/jquery.videoBG" property="og:url" /><meta content="jquery.videoBG - Adding HTML5 video backgrounds to websites" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NTc3NTQ3OjhkNzZiNjE2Zjk1NWQ1OGI4ZWQ4ZTM0MGFiZGFmOWJkOjQ5M2NiODlkNmMyMTMyNGFjY2IxNmE3ZDkwNzZkMjliNTliMjEyNDc2NWY5NzE3MDgwNDlmOTE2YjVkMjk1OGE=--60b816a0b24f9f00532a45a3caa10936ab5886ce">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="42CBB339:8522:1A7C5E8:5735DFBF" name="octolytics-dimension-request_id" /><meta content="577547" name="octolytics-actor-id" /><meta content="dimerbox" name="octolytics-actor-login" /><meta content="f0848a82810928627e5810d0e5fdb3e40d777af0302496ffd7cc78891851fda2" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="dimerbox">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ZDk2YjZiNzdmNmIyZjFhYzU3YmJmNWNlMGY2N2Q1Mzg5ZTZmMzU0NWQ4ZTRhOWI5ZDRkOGU4NWZhMzg1NmI4M3x7InJlbW90ZV9hZGRyZXNzIjoiNjYuMjAzLjE3OS41NyIsInJlcXVlc3RfaWQiOiI0MkNCQjMzOTo4NTIyOjFBN0M1RTg6NTczNURGQkYiLCJ0aW1lc3RhbXAiOjE0NjMxNDg0ODV9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="a5bc3018fdf68993b33405a467867671fe71b490" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="22dd3b7ce1aea89995da9e98ee8a9677">
    

      
  <meta name="description" content="jquery.videoBG - Adding HTML5 video backgrounds to websites">
  <meta name="go-import" content="github.com/sydlawrence/jquery.videoBG git https://github.com/sydlawrence/jquery.videoBG.git">

  <meta content="82717" name="octolytics-dimension-user_id" /><meta content="sydlawrence" name="octolytics-dimension-user_login" /><meta content="1481340" name="octolytics-dimension-repository_id" /><meta content="sydlawrence/jquery.videoBG" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1481340" name="octolytics-dimension-repository_network_root_id" /><meta content="sydlawrence/jquery.videoBG" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/sydlawrence/jquery.videoBG/commits/master.atom" rel="alternate" title="Recent Commits to jquery.videoBG:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/sydlawrence/jquery.videoBG/blob/master/assets/jquery-1.5.1.js" data-pjax-transient>
  </head>


  <body class="logged-in   env-production macintosh vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sydlawrence/jquery.videoBG/search" class="js-site-search-form" data-scoped-search-url="/sydlawrence/jquery.videoBG/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="notification-changed-v2:577547" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l0.73-0.58c0.77-0.77 0.81-2.55 1.19-4.42 0.77-3.77 4.08-5 4.08-5 0-0.55 0.45-1 1-1s1 0.45 1 1c0 0 3.39 1.23 4.16 5 0.38 1.88 0.42 3.66 1.19 4.42l0.66 0.58z m-7 4c1.11 0 2-0.89 2-2H5c0 1.11 0.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="sydlawrence/jquery.videoBG">This repository</span>
  </div>
    <a class="dropdown-item" href="/sydlawrence/jquery.videoBG/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/dimerbox"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@dimerbox" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/577547?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">dimerbox</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/dimerbox" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="a5bc3018fdf68993b33405a467867671fe71b490" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="7yszZ+/l2x1wfxlhyMeM+SDPexejhNRGz8h3bmMKT3qe7479naCbot+CydQ2RvIONKNpvqqhjsfCU/IslGSfOg==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="a5bc3018fdf68993b33405a467867671fe71b490" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jazJ3VaFKGMpZtWaLBZc2eLF7vUqMmqKJkTmc92UZrzNCAJlsabUclDZofdiKGz+9TE49yVleZZIKH1vF6Rmnw==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="1481340" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/sydlawrence/jquery.videoBG/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/sydlawrence/jquery.videoBG/watchers">
            41
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sydlawrence/jquery.videoBG/unstar" class="starred" data-form-nonce="a5bc3018fdf68993b33405a467867671fe71b490" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Zp7WRYmPFScJmO7tohonoOyggRifHKob2I56M38O7HG+eeTOYE8bw8WmQWP6JqijOhuQC8kponMpHKS7CmyJJQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar sydlawrence/jquery.videoBG"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/sydlawrence/jquery.videoBG/stargazers">
          434
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sydlawrence/jquery.videoBG/star" class="unstarred" data-form-nonce="a5bc3018fdf68993b33405a467867671fe71b490" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ZYaTFYFQdJSZKKrXGlBan2UfBPsZPssAKd8nRnrh4iGuJumfVsr1hRfx/2+WTas98vhd0Qo8Necs8rgrtdCJdw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star sydlawrence/jquery.videoBG"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/sydlawrence/jquery.videoBG/stargazers">
          434
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sydlawrence/jquery.videoBG/fork" class="btn-with-count" data-form-nonce="a5bc3018fdf68993b33405a467867671fe71b490" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6SUDHQjpQcUhaHPDdlYqPc2bm1Kci1dRRnlNUDkoLR7Mo+hvjtBZmEG0MbiyyzOr5tScS376b1++IC442m1yEA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of sydlawrence/jquery.videoBG to your account"
                aria-label="Fork your own copy of sydlawrence/jquery.videoBG to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/sydlawrence/jquery.videoBG/network" class="social-count">
      224
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/sydlawrence" class="url fn" rel="author">sydlawrence</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/sydlawrence/jquery.videoBG" data-pjax="#js-repo-pjax-container">jquery.videoBG</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/sydlawrence/jquery.videoBG" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /sydlawrence/jquery.videoBG" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/sydlawrence/jquery.videoBG/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /sydlawrence/jquery.videoBG/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">20</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/sydlawrence/jquery.videoBG/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /sydlawrence/jquery.videoBG/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">10</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/sydlawrence/jquery.videoBG/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /sydlawrence/jquery.videoBG/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>

  <a href="/sydlawrence/jquery.videoBG/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /sydlawrence/jquery.videoBG/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/sydlawrence/jquery.videoBG/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /sydlawrence/jquery.videoBG/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/sydlawrence/jquery.videoBG/blob/53f7bde867712c0025c3e0d9c8bc00b66f610e31/assets/jquery-1.5.1.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:677024ebbe3bfed64168eee41549774c -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/sydlawrence/jquery.videoBG/blob/master/assets/jquery-1.5.1.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/sydlawrence/jquery.videoBG/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/sydlawrence/jquery.videoBG"><span>jquery.videoBG</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/sydlawrence/jquery.videoBG/tree/master/assets"><span>assets</span></a></span><span class="separator">/</span><strong class="final-path">jquery-1.5.1.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/sydlawrence/jquery.videoBG/commit/00e318251dd7e9aed8ff9435b842863fb4843a96" data-pjax>
          00e3182
        </a>
        <relative-time datetime="2011-03-15T03:37:13Z">Mar 15, 2011</relative-time>
      </span>
      <div>
        <img alt="@sydlawrence" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/82717?v=3&amp;s=40" width="20" />
        <a href="/sydlawrence" class="user-mention" rel="author">sydlawrence</a>
          <a href="/sydlawrence/jquery.videoBG/commit/00e318251dd7e9aed8ff9435b842863fb4843a96" class="message" data-pjax="true" title="jigged file system, and made it work cross browser">jigged file system, and made it work cross browser</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@sydlawrence" height="24" src="https://avatars3.githubusercontent.com/u/82717?v=3&amp;s=48" width="24" />
            <a href="/sydlawrence">sydlawrence</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/sydlawrence/jquery.videoBG/raw/master/assets/jquery-1.5.1.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/sydlawrence/jquery.videoBG/blame/master/assets/jquery-1.5.1.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/sydlawrence/jquery.videoBG/commits/master/assets/jquery-1.5.1.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-mac://openRepo/https://github.com/sydlawrence/jquery.videoBG?branch=master&amp;filepath=assets%2Fjquery-1.5.1.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h5.34c-0.25 0.61-0.86 1.39-2.34 2h8c-1.48-0.61-2.09-1.39-2.34-2h5.34c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1z m0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sydlawrence/jquery.videoBG/edit/master/assets/jquery-1.5.1.js" class="inline-form js-update-url-with-hash" data-form-nonce="a5bc3018fdf68993b33405a467867671fe71b490" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="J+2PqAiEP2Z6njpSdwl0I0VixyuGfEzzY1OVY430PpXOlReNUYJAxzw5kDwG4+p3U4Ws/OgT+CTelNXy16yXLQ==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sydlawrence/jquery.videoBG/delete/master/assets/jquery-1.5.1.js" class="inline-form" data-form-nonce="a5bc3018fdf68993b33405a467867671fe71b490" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eUaE/C84UT6jlL9QrSI3pYOvaeRy8SCf0zh2NT4lTtxai9/FBPOsfoWzXnWRfUXWSNCKHhO04JdbbQfjaAPSOw==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      16 lines (16 sloc)
      <span class="file-info-divider"></span>
    83.3 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*!</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"> * jQuery JavaScript Library v1.5.1</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"> * http://jquery.com/</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"> *</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"> * Copyright 2011, John Resig</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"> * Dual licensed under the MIT or GPL Version 2 licenses.</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"> * http://jquery.org/license</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"> *</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"> * Includes Sizzle.js</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"> * http://sizzlejs.com/</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"> * Copyright 2011, The Dojo Foundation</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"> * Released under the MIT, BSD, and GPL Licenses.</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"> *</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"> * Date: Wed Feb 23 13:55:29 2011 -0500</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"> */</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">(function(a,b){function cg(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cd(a){if(!bZ[a]){var b=d(&quot;&lt;&quot;+a+&quot;&gt;&quot;).appendTo(&quot;body&quot;),c=b.css(&quot;display&quot;);b.remove();if(c===&quot;none&quot;||c===&quot;&quot;)c=&quot;block&quot;;bZ[a]=c}return bZ[a]}function cc(a,b){var c={};d.each(cb.concat.apply([],cb.slice(0,b)),function(){c[this]=a});return c}function bY(){try{return new a.ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)}catch(b){}}function bX(){try{return new a.XMLHttpRequest}catch(b){}}function bW(){d(a).unload(function(){for(var a in bU)bU[a](0,1)})}function bQ(a,c){a.dataFilter&amp;&amp;(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g&lt;i;g++){if(g===1)for(h in a.converters)typeof h===&quot;string&quot;&amp;&amp;(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k===&quot;*&quot;)k=l;else if(l!==&quot;*&quot;&amp;&amp;l!==k){m=l+&quot; &quot;+k,n=f[m]||f[&quot;* &quot;+k];if(!n){p=b;for(o in f){j=o.split(&quot; &quot;);if(j[0]===l||j[0]===&quot;*&quot;){p=f[j[1]+&quot; &quot;+k];if(p){o=f[o],o===!0?n=p:p===!0&amp;&amp;(n=o);break}}}}!n&amp;&amp;!p&amp;&amp;d.error(&quot;No conversion from &quot;+m.replace(&quot; &quot;,&quot; to &quot;)),n!==!0&amp;&amp;(c=n?n(c):p(o(c)))}}return c}function bP(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&amp;&amp;(c[g[i]]=d[i]);while(f[0]===&quot;*&quot;)f.shift(),h===b&amp;&amp;(h=a.mimeType||c.getResponseHeader(&quot;content-type&quot;));if(h)for(i in e)if(e[i]&amp;&amp;e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+&quot; &quot;+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&amp;&amp;f.unshift(j);return d[j]}}function bO(a,b,c,e){if(d.isArray(b)&amp;&amp;b.length)d.each(b,function(b,f){c||bq.test(a)?e(a,f):bO(a+&quot;[&quot;+(typeof f===&quot;object&quot;||d.isArray(f)?b:&quot;&quot;)+&quot;]&quot;,f,c,e)});else if(c||b==null||typeof b!==&quot;object&quot;)e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,&quot;&quot;);else for(var f in b)bO(a+&quot;[&quot;+f+&quot;]&quot;,b[f],c,e)}function bN(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bH,l;for(;i&lt;j&amp;&amp;(k||!l);i++)l=h[i](c,d,e),typeof l===&quot;string&quot;&amp;&amp;(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bN(a,c,d,e,l,g)));(k||!l)&amp;&amp;!g[&quot;*&quot;]&amp;&amp;(l=bN(a,c,d,e,&quot;*&quot;,g));return l}function bM(a){return function(b,c){typeof b!==&quot;string&quot;&amp;&amp;(c=b,b=&quot;*&quot;);if(d.isFunction(c)){var e=b.toLowerCase().split(bB),f=0,g=e.length,h,i,j;for(;f&lt;g;f++)h=e[f],j=/^\+/.test(h),j&amp;&amp;(h=h.substr(1)||&quot;*&quot;),i=a[h]=a[h]||[],i[j?&quot;unshift&quot;:&quot;push&quot;](c)}}}function bo(a,b,c){var e=b===&quot;width&quot;?bi:bj,f=b===&quot;width&quot;?a.offsetWidth:a.offsetHeight;if(c===&quot;border&quot;)return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,&quot;padding&quot;+this))||0),c===&quot;margin&quot;?f+=parseFloat(d.css(a,&quot;margin&quot;+this))||0:f-=parseFloat(d.css(a,&quot;border&quot;+this+&quot;Width&quot;))||0});return f}function ba(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:&quot;script&quot;}):d.globalEval(b.text||b.textContent||b.innerHTML||&quot;&quot;),b.parentNode&amp;&amp;b.parentNode.removeChild(b)}function _(a){return&quot;getElementsByTagName&quot;in a?a.getElementsByTagName(&quot;*&quot;):&quot;querySelectorAll&quot;in a?a.querySelectorAll(&quot;*&quot;):[]}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c===&quot;object&quot;)b.outerHTML=a.outerHTML;else if(c!==&quot;input&quot;||a.type!==&quot;checkbox&quot;&amp;&amp;a.type!==&quot;radio&quot;){if(c===&quot;option&quot;)b.selected=a.defaultSelected;else if(c===&quot;input&quot;||c===&quot;textarea&quot;)b.defaultValue=a.defaultValue}else a.checked&amp;&amp;(b.defaultChecked=b.checked=a.checked),b.value!==a.value&amp;&amp;(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&amp;&amp;d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i&lt;j;i++)d.event.add(b,h+(g[h][i].namespace?&quot;.&quot;:&quot;&quot;)+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,&quot;table&quot;)?a.getElementsByTagName(&quot;tbody&quot;)[0]||a.appendChild(a.ownerDocument.createElement(&quot;tbody&quot;)):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b===&quot;string&quot;){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)&gt;=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&amp;&amp;a!==&quot;*&quot;?a+&quot;.&quot;:&quot;&quot;)+b.replace(r,&quot;`&quot;).replace(s,&quot;&amp;&quot;)}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,q=[],r=[],s=d._data(this,&quot;events&quot;);if(a.liveFired!==this&amp;&amp;s&amp;&amp;s.live&amp;&amp;!a.target.disabled&amp;&amp;(!a.button||a.type!==&quot;click&quot;)){a.namespace&amp;&amp;(n=new RegExp(&quot;(^|\\.)&quot;+a.namespace.split(&quot;.&quot;).join(&quot;\\.(?:.*\\.)?&quot;)+&quot;(\\.|$)&quot;)),a.liveFired=this;var t=s.live.slice(0);for(i=0;i&lt;t.length;i++)g=t[i],g.origType.replace(p,&quot;&quot;)===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j&lt;k;j++){m=f[j];for(i=0;i&lt;t.length;i++){g=t[i];if(m.selector===g.selector&amp;&amp;(!n||n.test(g.namespace))&amp;&amp;!m.elem.disabled){h=m.elem,e=null;if(g.preType===&quot;mouseenter&quot;||g.preType===&quot;mouseleave&quot;)a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&amp;&amp;q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j&lt;k;j++){f=q[j];if(c&amp;&amp;f.level&gt;c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&amp;&amp;(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&amp;&amp;e[0].preventDefault()}function w(){return!0}function v(){return!1}function g(a){for(var b in a)if(b!==&quot;toJSON&quot;)return!1;return!0}function f(a,c,f){if(f===b&amp;&amp;a.nodeType===1){f=a.getAttribute(&quot;data-&quot;+c);if(typeof f===&quot;string&quot;){try{f=f===&quot;true&quot;?!0:f===&quot;false&quot;?!1:f===&quot;null&quot;?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll(&quot;left&quot;)}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^&lt;]*(&lt;[\w\W]+&gt;)[^&gt;]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z=&quot;then done fail isResolved isRejected promise&quot;.split(&quot; &quot;),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a===&quot;body&quot;&amp;&amp;!e&amp;&amp;c.body){this.context=c,this[0]=c.body,this.selector=&quot;body&quot;,this.length=1;return this}if(typeof a===&quot;string&quot;){g=h.exec(a);if(!g||!g[1]&amp;&amp;e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&amp;&amp;i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&amp;&amp;(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:&quot;&quot;,jquery:&quot;1.5.1&quot;,length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a&lt;0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b===&quot;find&quot;?e.selector=this.selector+(this.selector?&quot; &quot;:&quot;&quot;)+c:b&amp;&amp;(e.selector=this.selector+&quot;.&quot;+b+&quot;(&quot;+c+&quot;)&quot;);return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),&quot;slice&quot;,E.call(arguments).join(&quot;,&quot;))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i===&quot;boolean&quot;&amp;&amp;(l=i,i=arguments[1]||{},j=2),typeof i!==&quot;object&quot;&amp;&amp;!d.isFunction(i)&amp;&amp;(i={}),k===j&amp;&amp;(i=this,--j);for(;j&lt;k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&amp;&amp;f&amp;&amp;(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&amp;&amp;d.isArray(e)?e:[]):h=e&amp;&amp;d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&amp;&amp;(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&amp;&amp;(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&amp;&amp;d.readyWait--;if(!d.readyWait||a!==!0&amp;&amp;!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&amp;&amp;--d.readyWait&gt;0)return;y.resolveWith(c,[d]),d.fn.trigger&amp;&amp;d(c).trigger(&quot;ready&quot;).unbind(&quot;ready&quot;)}},bindReady:function(){if(!x){x=!0;if(c.readyState===&quot;complete&quot;)return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener(&quot;DOMContentLoaded&quot;,A,!1),a.addEventListener(&quot;load&quot;,d.ready,!1);else if(c.attachEvent){c.attachEvent(&quot;onreadystatechange&quot;,A),a.attachEvent(&quot;onload&quot;,d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&amp;&amp;b&amp;&amp;I()}}},isFunction:function(a){return d.type(a)===&quot;function&quot;},isArray:Array.isArray||function(a){return d.type(a)===&quot;array&quot;},isWindow:function(a){return a&amp;&amp;typeof a===&quot;object&quot;&amp;&amp;&quot;setInterval&quot;in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||&quot;object&quot;},isPlainObject:function(a){if(!a||d.type(a)!==&quot;object&quot;||a.nodeType||d.isWindow(a))return!1;if(a.constructor&amp;&amp;!C.call(a,&quot;constructor&quot;)&amp;&amp;!C.call(a.constructor.prototype,&quot;isPrototypeOf&quot;))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!==&quot;string&quot;||!b)return null;b=d.trim(b);if(n.test(b.replace(o,&quot;@&quot;).replace(p,&quot;]&quot;).replace(q,&quot;&quot;)))return a.JSON&amp;&amp;a.JSON.parse?a.JSON.parse(b):(new Function(&quot;return &quot;+b))();d.error(&quot;Invalid JSON: &quot;+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,&quot;text/xml&quot;)):(c=new ActiveXObject(&quot;Microsoft.XMLDOM&quot;),c.async=&quot;false&quot;,c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName===&quot;parsererror&quot;)&amp;&amp;d.error(&quot;Invalid XML: &quot;+b);return c},noop:function(){},globalEval:function(a){if(a&amp;&amp;i.test(a)){var b=c.head||c.getElementsByTagName(&quot;head&quot;)[0]||c.documentElement,e=c.createElement(&quot;script&quot;);d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&amp;&amp;a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g&lt;h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g&lt;h&amp;&amp;c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?&quot;&quot;:F.call(a)}:function(a){return a==null?&quot;&quot;:(a+&quot;&quot;).replace(j,&quot;&quot;).replace(k,&quot;&quot;)},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e===&quot;string&quot;||e===&quot;function&quot;||e===&quot;regexp&quot;||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c&lt;d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length===&quot;number&quot;)for(var f=c.length;e&lt;f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f&lt;g;f++)e=!!b(a[f],f),c!==e&amp;&amp;d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f&lt;g;f++)e=b(a[f],f,c),e!=null&amp;&amp;(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&amp;&amp;(typeof c===&quot;string&quot;?(e=a,a=e[c],c=b):c&amp;&amp;!d.isFunction(c)&amp;&amp;(e=c,c=b)),!c&amp;&amp;a&amp;&amp;(c=function(){return a.apply(e||this,arguments)}),a&amp;&amp;(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c===&quot;object&quot;){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&amp;&amp;f&amp;&amp;d.isFunction(e);for(var k=0;k&lt;i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&amp;&amp;(k=b,b=0);for(g=0,h=c.length;g&lt;h;g++)i=c[g],j=d.type(i),j===&quot;array&quot;?f.done.apply(f,i):j===&quot;function&quot;&amp;&amp;a.push(i);k&amp;&amp;f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&amp;&amp;!b&amp;&amp;!c){c=1;try{while(a[0])a.shift().apply(d,f)}catch(g){throw g}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(e)return e;e=a={}}var c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&amp;&amp;a.call(b,b);return b},when:function(a){var b=arguments.length,c=b&lt;=1&amp;&amp;a&amp;&amp;d.isFunction(a.promise)?a:d.Deferred(),e=c.promise();if(b&gt;1){var f=E.call(arguments,0),g=b,h=function(a){return function(b){f[a]=arguments.length&gt;1?E.call(arguments,0):b,--g||c.resolveWith(e,f)}};while(b--)a=f[b],a&amp;&amp;d.isFunction(a.promise)?a.promise().then(h(b),c.reject):--g;g||c.resolveWith(e,f)}else c!==a&amp;&amp;c.resolve(a);return e},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf(&quot;compatible&quot;)&lt;0&amp;&amp;u.exec(a)||[];return{browser:b[1]||&quot;&quot;,version:b[2]||&quot;0&quot;}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&amp;&amp;c instanceof d&amp;&amp;!(c instanceof a)&amp;&amp;(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each(&quot;Boolean Number String Function Array Date RegExp Object&quot;.split(&quot; &quot;),function(a,b){H[&quot;[object &quot;+b+&quot;]&quot;]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&amp;&amp;(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&amp;&amp;(d.browser.safari=!0),G&amp;&amp;(d.inArray=function(a,b){return G.call(b,a)}),i.test(&quot; &quot;)&amp;&amp;(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener(&quot;DOMContentLoaded&quot;,A,!1),d.ready()}:c.attachEvent&amp;&amp;(A=function(){c.readyState===&quot;complete&quot;&amp;&amp;(c.detachEvent(&quot;onreadystatechange&quot;,A),d.ready())});return d}();(function(){d.support={};var b=c.createElement(&quot;div&quot;);b.style.display=&quot;none&quot;,b.innerHTML=&quot;   &lt;link/&gt;&lt;table&gt;&lt;/table&gt;&lt;a href=&#39;/a&#39; style=&#39;color:red;float:left;opacity:.55;&#39;&gt;a&lt;/a&gt;&lt;input type=&#39;checkbox&#39;/&gt;&quot;;var e=b.getElementsByTagName(&quot;*&quot;),f=b.getElementsByTagName(&quot;a&quot;)[0],g=c.createElement(&quot;select&quot;),h=g.appendChild(c.createElement(&quot;option&quot;)),i=b.getElementsByTagName(&quot;input&quot;)[0];if(e&amp;&amp;e.length&amp;&amp;f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName(&quot;tbody&quot;).length,htmlSerialize:!!b.getElementsByTagName(&quot;link&quot;).length,style:/red/.test(f.getAttribute(&quot;style&quot;)),hrefNormalized:f.getAttribute(&quot;href&quot;)===&quot;/a&quot;,opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value===&quot;on&quot;,optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement(&quot;script&quot;),f=&quot;script&quot;+d.now();try{e.appendChild(c.createTextNode(&quot;window.&quot;+f+&quot;=1;&quot;))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e),b=e=f=null}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&amp;&amp;b.attachEvent&amp;&amp;b.fireEvent&amp;&amp;(b.attachEvent(&quot;onclick&quot;,function l(){d.support.noCloneEvent=!1,b.detachEvent(&quot;onclick&quot;,l)}),b.cloneNode(!0).fireEvent(&quot;onclick&quot;)),b=c.createElement(&quot;div&quot;),b.innerHTML=&quot;&lt;input type=&#39;radio&#39; name=&#39;radiotest&#39; checked=&#39;checked&#39;/&gt;&quot;;var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement(&quot;div&quot;),b=c.getElementsByTagName(&quot;body&quot;)[0];if(b){a.style.width=a.style.paddingLeft=&quot;1px&quot;,b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,&quot;zoom&quot;in a.style&amp;&amp;(a.style.display=&quot;inline&quot;,a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display=&quot;&quot;,a.innerHTML=&quot;&lt;div style=&#39;width:4px;&#39;&gt;&lt;/div&gt;&quot;,d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML=&quot;&lt;table&gt;&lt;tr&gt;&lt;td style=&#39;padding:0;border:0;display:none&#39;&gt;&lt;/td&gt;&lt;td&gt;t&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;;var e=a.getElementsByTagName(&quot;td&quot;);d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display=&quot;&quot;,e[1].style.display=&quot;none&quot;,d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&amp;&amp;e[0].offsetHeight===0,a.innerHTML=&quot;&quot;,b.removeChild(a).style.display=&quot;none&quot;,a=e=null}});var n=function(a){var b=c.createElement(&quot;div&quot;);a=&quot;on&quot;+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,&quot;return;&quot;),d=typeof b[a]===&quot;function&quot;),b=null;return d};d.support.submitBubbles=n(&quot;submit&quot;),d.support.changeBubbles=n(&quot;change&quot;),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:&quot;jQuery&quot;+(d.fn.jquery+Math.random()).replace(/\D/g,&quot;&quot;),noData:{embed:!0,object:&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot;,applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&amp;&amp;!g(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c===&quot;string&quot;,i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&amp;&amp;d.expando;if((!l||f&amp;&amp;l&amp;&amp;!k[l][g])&amp;&amp;h&amp;&amp;e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c===&quot;object&quot;||typeof c===&quot;function&quot;)f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&amp;&amp;(i[g]||(i[g]={}),i=i[g]),e!==b&amp;&amp;(i[c]=e);if(c===&quot;events&quot;&amp;&amp;!i[c])return i[g]&amp;&amp;i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,h=b.nodeType,i=h?d.cache:b,j=h?b[d.expando]:d.expando;if(!i[j])return;if(c){var k=e?i[j][f]:i[j];if(k){delete k[c];if(!g(k))return}}if(e){delete i[j][f];if(!g(i[j]))return}var l=i[j][f];d.support.deleteExpando||i!=a?delete i[j]:i[j]=null,l?(i[j]={},h||(i[j].toJSON=d.noop),i[j][f]=l):h&amp;&amp;(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&amp;&amp;a.getAttribute(&quot;classid&quot;)===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a===&quot;undefined&quot;){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i&lt;j;i++)h=g[i].name,h.indexOf(&quot;data-&quot;)===0&amp;&amp;(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a===&quot;object&quot;)return this.each(function(){d.data(this,a)});var k=a.split(&quot;.&quot;);k[1]=k[1]?&quot;.&quot;+k[1]:&quot;&quot;;if(c===b){e=this.triggerHandler(&quot;getData&quot;+k[1]+&quot;!&quot;,[k[0]]),e===b&amp;&amp;this.length&amp;&amp;(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&amp;&amp;k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler(&quot;setData&quot;+k[1]+&quot;!&quot;,e),d.data(this,a,c),b.triggerHandler(&quot;changeData&quot;+k[1]+&quot;!&quot;,e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||&quot;fx&quot;)+&quot;queue&quot;;var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||&quot;fx&quot;;var c=d.queue(a,b),e=c.shift();e===&quot;inprogress&quot;&amp;&amp;(e=c.shift()),e&amp;&amp;(b===&quot;fx&quot;&amp;&amp;c.unshift(&quot;inprogress&quot;),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+&quot;queue&quot;,!0)}}),d.fn.extend({queue:function(a,c){typeof a!==&quot;string&quot;&amp;&amp;(c=a,a=&quot;fx&quot;);if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a===&quot;fx&quot;&amp;&amp;e[0]!==&quot;inprogress&quot;&amp;&amp;d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||&quot;fx&quot;;return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||&quot;fx&quot;,[])}});var h=/[\n\t\r]/g,i=/\s+/,j=/\r/g,k=/^(?:href|src|style)$/,l=/^(?:button|input)$/i,m=/^(?:button|input|object|select|textarea)$/i,n=/^a(?:rea)?$/i,o=/^(?:radio|checkbox)$/i;d.props={&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;,readonly:&quot;readOnly&quot;,maxlength:&quot;maxLength&quot;,cellspacing:&quot;cellSpacing&quot;,rowspan:&quot;rowSpan&quot;,colspan:&quot;colSpan&quot;,tabindex:&quot;tabIndex&quot;,usemap:&quot;useMap&quot;,frameborder:&quot;frameBorder&quot;},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,&quot;&quot;),this.nodeType===1&amp;&amp;this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr(&quot;class&quot;)))});if(a&amp;&amp;typeof a===&quot;string&quot;){var b=(a||&quot;&quot;).split(i);for(var c=0,e=this.length;c&lt;e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=&quot; &quot;+f.className+&quot; &quot;,h=f.className;for(var j=0,k=b.length;j&lt;k;j++)g.indexOf(&quot; &quot;+b[j]+&quot; &quot;)&lt;0&amp;&amp;(h+=&quot; &quot;+b[j]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr(&quot;class&quot;)))});if(a&amp;&amp;typeof a===&quot;string&quot;||a===b){var c=(a||&quot;&quot;).split(i);for(var e=0,f=this.length;e&lt;f;e++){var g=this[e];if(g.nodeType===1&amp;&amp;g.className)if(a){var j=(&quot; &quot;+g.className+&quot; &quot;).replace(h,&quot; &quot;);for(var k=0,l=c.length;k&lt;l;k++)j=j.replace(&quot; &quot;+c[k]+&quot; &quot;,&quot; &quot;);g.className=d.trim(j)}else g.className=&quot;&quot;}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b===&quot;boolean&quot;;if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr(&quot;class&quot;),b),b)});return this.each(function(){if(c===&quot;string&quot;){var f,g=0,h=d(this),j=b,k=a.split(i);while(f=k[g++])j=e?j:!h.hasClass(f),h[j?&quot;addClass&quot;:&quot;removeClass&quot;](f)}else if(c===&quot;undefined&quot;||c===&quot;boolean&quot;)this.className&amp;&amp;d._data(this,&quot;__className__&quot;,this.className),this.className=this.className||a===!1?&quot;&quot;:d._data(this,&quot;__className__&quot;)||&quot;&quot;})},hasClass:function(a){var b=&quot; &quot;+a+&quot; &quot;;for(var c=0,d=this.length;c&lt;d;c++)if((&quot; &quot;+this[c].className+&quot; &quot;).replace(h,&quot; &quot;).indexOf(b)&gt;-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,&quot;option&quot;)){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,&quot;select&quot;)){var f=c.selectedIndex,g=[],h=c.options,i=c.type===&quot;select-one&quot;;if(f&lt;0)return null;for(var k=i?f:0,l=i?f+1:h.length;k&lt;l;k++){var m=h[k];if(m.selected&amp;&amp;(d.support.optDisabled?!m.disabled:m.getAttribute(&quot;disabled&quot;)===null)&amp;&amp;(!m.parentNode.disabled||!d.nodeName(m.parentNode,&quot;optgroup&quot;))){a=d(m).val();if(i)return a;g.push(a)}}if(i&amp;&amp;!g.length&amp;&amp;h.length)return d(h[f]).val();return g}if(o.test(c.type)&amp;&amp;!d.support.checkOn)return c.getAttribute(&quot;value&quot;)===null?&quot;on&quot;:c.value;return(c.value||&quot;&quot;).replace(j,&quot;&quot;)}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&amp;&amp;(e=a.call(this,b,c.val())),e==null?e=&quot;&quot;:typeof e===&quot;number&quot;?e+=&quot;&quot;:d.isArray(e)&amp;&amp;(e=d.map(e,function(a){return a==null?&quot;&quot;:a+&quot;&quot;}));if(d.isArray(e)&amp;&amp;o.test(this.type))this.checked=d.inArray(c.val(),e)&gt;=0;else if(d.nodeName(this,&quot;select&quot;)){var f=d.makeArray(e);d(&quot;option&quot;,this).each(function(){this.selected=d.inArray(d(this).val(),f)&gt;=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&amp;&amp;c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&amp;&amp;d.props[c]||c;if(a.nodeType===1){var i=k.test(c);if(c===&quot;selected&quot;&amp;&amp;!d.support.optSelected){var j=a.parentNode;j&amp;&amp;(j.selectedIndex,j.parentNode&amp;&amp;j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&amp;&amp;g&amp;&amp;!i){h&amp;&amp;(c===&quot;type&quot;&amp;&amp;l.test(a.nodeName)&amp;&amp;a.parentNode&amp;&amp;d.error(&quot;type property can&#39;t be changed&quot;),e===null?a.nodeType===1&amp;&amp;a.removeAttribute(c):a[c]=e);if(d.nodeName(a,&quot;form&quot;)&amp;&amp;a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c===&quot;tabIndex&quot;){var o=a.getAttributeNode(&quot;tabIndex&quot;);return o&amp;&amp;o.specified?o.value:m.test(a.nodeName)||n.test(a.nodeName)&amp;&amp;a.href?0:b}return a[c]}if(!d.support.style&amp;&amp;g&amp;&amp;c===&quot;style&quot;){h&amp;&amp;(a.style.cssText=&quot;&quot;+e);return a.style.cssText}h&amp;&amp;a.setAttribute(c,&quot;&quot;+e);if(!a.attributes[c]&amp;&amp;(a.hasAttribute&amp;&amp;!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&amp;&amp;g&amp;&amp;i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&amp;&amp;(a[c]=e);return a[c]}});var p=/\.(.*)$/,q=/^(?:textarea|input|select)$/i,r=/\./g,s=/ /g,t=/[^\w\s.|`]/g,u=function(a){return a.replace(t,&quot;\\$&amp;&quot;)};d.event={add:function(c,e,f,g){if(c.nodeType!==3&amp;&amp;c.nodeType!==8){try{d.isWindow(c)&amp;&amp;(c!==a&amp;&amp;!c.frameElement)&amp;&amp;(c=a)}catch(h){}if(f===!1)f=v;else if(!f)return;var i,j;f.handler&amp;&amp;(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(){return typeof d!==&quot;undefined&quot;&amp;&amp;!d.event.triggered?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(&quot; &quot;);var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(&quot;.&quot;)&gt;-1?(p=n.split(&quot;.&quot;),n=p.shift(),j.namespace=p.slice(0).sort().join(&quot;.&quot;)):(p=[],j.namespace=&quot;&quot;),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&amp;&amp;c.attachEvent(&quot;on&quot;+n,m)}r.add&amp;&amp;(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&amp;&amp;a.nodeType!==8){e===!1&amp;&amp;(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&amp;&amp;d._data(a),t=s&amp;&amp;s.events;if(!s||!t)return;c&amp;&amp;c.type&amp;&amp;(e=c.handler,c=c.type);if(!c||typeof c===&quot;string&quot;&amp;&amp;c.charAt(0)===&quot;.&quot;){c=c||&quot;&quot;;for(h in t)d.event.remove(a,h+c);return}c=c.split(&quot; &quot;);while(h=c[k++]){r=h,q=null,l=h.indexOf(&quot;.&quot;)&lt;0,m=[],l||(m=h.split(&quot;.&quot;),h=m.shift(),n=new RegExp(&quot;(^|\\.)&quot;+d.map(m.slice(0).sort(),u).join(&quot;\\.(?:.*\\.)?&quot;)+&quot;(\\.|$)&quot;)),p=t[h];if(!p)continue;if(!e){for(j=0;j&lt;p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j&lt;p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&amp;&amp;p.splice(j--,1),o.remove&amp;&amp;o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&amp;&amp;p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&amp;&amp;d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var w=s.handle;w&amp;&amp;(w.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&amp;&amp;d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a===&quot;object&quot;?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf(&quot;!&quot;)&gt;=0&amp;&amp;(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&amp;&amp;d.each(d.cache,function(){var b=d.expando,e=this[b];e&amp;&amp;e.events&amp;&amp;e.events[f]&amp;&amp;d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,&quot;handle&quot;);h&amp;&amp;h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&amp;&amp;e.nodeName&amp;&amp;d.noData[e.nodeName.toLowerCase()]||e[&quot;on&quot;+f]&amp;&amp;e[&quot;on&quot;+f].apply(e,c)===!1&amp;&amp;(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&amp;&amp;i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(p,&quot;&quot;),n=d.nodeName(l,&quot;a&quot;)&amp;&amp;m===&quot;click&quot;,o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&amp;&amp;!n&amp;&amp;!(l&amp;&amp;l.nodeName&amp;&amp;d.noData[l.nodeName.toLowerCase()])){try{l[m]&amp;&amp;(k=l[&quot;on&quot;+m],k&amp;&amp;(l[&quot;on&quot;+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&amp;&amp;(l[&quot;on&quot;+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(&quot;.&quot;)&lt;0&amp;&amp;!c.exclusive,e||(g=c.type.split(&quot;.&quot;),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp(&quot;(^|\\.)&quot;+j.join(&quot;\\.(?:.*\\.)?&quot;)+&quot;(\\.|$)&quot;)),c.namespace=c.namespace||j.join(&quot;.&quot;),i=d._data(this,&quot;events&quot;),f=(i||{})[c.type];if(i&amp;&amp;f){f=f.slice(0);for(var l=0,m=f.length;l&lt;m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&amp;&amp;(c.result=o,o===!1&amp;&amp;(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:&quot;altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which&quot;.split(&quot; &quot;),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&amp;&amp;(a.target=a.target.parentNode),!a.relatedTarget&amp;&amp;a.fromElement&amp;&amp;(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&amp;&amp;a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&amp;&amp;h.scrollLeft||i&amp;&amp;i.scrollLeft||0)-(h&amp;&amp;h.clientLeft||i&amp;&amp;i.clientLeft||0),a.pageY=a.clientY+(h&amp;&amp;h.scrollTop||i&amp;&amp;i.scrollTop||0)-(h&amp;&amp;h.clientTop||i&amp;&amp;i.clientTop||0)}a.which==null&amp;&amp;(a.charCode!=null||a.keyCode!=null)&amp;&amp;(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&amp;&amp;a.ctrlKey&amp;&amp;(a.metaKey=a.ctrlKey),!a.which&amp;&amp;a.button!==b&amp;&amp;(a.which=a.button&amp;1?1:a.button&amp;2?3:a.button&amp;4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&amp;&amp;(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&amp;&amp;(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&amp;&amp;a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&amp;&amp;a.detachEvent(&quot;on&quot;+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&amp;&amp;a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&amp;&amp;a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&amp;&amp;(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&amp;&amp;(a.stopPropagation&amp;&amp;a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{if(b!==c&amp;&amp;!b.parentNode)return;while(b&amp;&amp;b!==this)b=b.parentNode;b!==this&amp;&amp;(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&amp;&amp;c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&amp;&amp;a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&amp;&amp;this.nodeName.toLowerCase()!==&quot;form&quot;)d.event.add(this,&quot;click.specialSubmit&quot;,function(a){var b=a.target,c=b.type;(c===&quot;submit&quot;||c===&quot;image&quot;)&amp;&amp;d(b).closest(&quot;form&quot;).length&amp;&amp;C(&quot;submit&quot;,this,arguments)}),d.event.add(this,&quot;keypress.specialSubmit&quot;,function(a){var b=a.target,c=b.type;(c===&quot;text&quot;||c===&quot;password&quot;)&amp;&amp;d(b).closest(&quot;form&quot;).length&amp;&amp;a.keyCode===13&amp;&amp;C(&quot;submit&quot;,this,arguments)});else return!1},teardown:function(a){d.event.remove(this,&quot;.specialSubmit&quot;)}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b===&quot;radio&quot;||b===&quot;checkbox&quot;?c=a.checked:b===&quot;select-multiple&quot;?c=a.selectedIndex&gt;-1?d.map(a.options,function(a){return a.selected}).join(&quot;-&quot;):&quot;&quot;:a.nodeName.toLowerCase()===&quot;select&quot;&amp;&amp;(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(q.test(c.nodeName)&amp;&amp;!c.readOnly){e=d._data(c,&quot;_change_data&quot;),f=A(c),(a.type!==&quot;focusout&quot;||c.type!==&quot;radio&quot;)&amp;&amp;d._data(c,&quot;_change_data&quot;,f);if(e===b||f===e)return;if(e!=null||f)a.type=&quot;change&quot;,a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;(c===&quot;radio&quot;||c===&quot;checkbox&quot;||b.nodeName.toLowerCase()===&quot;select&quot;)&amp;&amp;B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&amp;&amp;b.nodeName.toLowerCase()!==&quot;textarea&quot;||a.keyCode===32&amp;&amp;(c===&quot;checkbox&quot;||c===&quot;radio&quot;)||c===&quot;select-multiple&quot;)&amp;&amp;B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,&quot;_change_data&quot;,A(b))}},setup:function(a,b){if(this.type===&quot;file&quot;)return!1;for(var c in z)d.event.add(this,c+&quot;.specialChange&quot;,z[c]);return q.test(this.nodeName)},teardown:function(a){d.event.remove(this,&quot;.specialChange&quot;);return q.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&amp;&amp;d.each({focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each([&quot;bind&quot;,&quot;one&quot;],function(a,c){d.fn[c]=function(a,e,f){if(typeof a===&quot;object&quot;){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c===&quot;one&quot;?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a===&quot;unload&quot;&amp;&amp;c!==&quot;one&quot;)this.one(a,e,f);else for(var i=0,j=this.length;i&lt;j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!==&quot;object&quot;||a.preventDefault)for(var e=0,f=this.length;e&lt;f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind(&quot;live&quot;):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c&lt;b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,&quot;lastToggle&quot;+a.guid)||0)%c;d._data(this,&quot;lastToggle&quot;+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:&quot;focusin&quot;,blur:&quot;focusout&quot;,mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;};d.each([&quot;live&quot;,&quot;die&quot;],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a===&quot;object&quot;&amp;&amp;!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&amp;&amp;(f=e,e=b),a=(a||&quot;&quot;).split(&quot; &quot;);while((h=a[i++])!=null){j=p.exec(h),k=&quot;&quot;,j&amp;&amp;(k=j[0],h=h.replace(p,&quot;&quot;));if(h===&quot;hover&quot;){a.push(&quot;mouseenter&quot;+k,&quot;mouseleave&quot;+k);continue}l=h,h===&quot;focus&quot;||h===&quot;blur&quot;?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c===&quot;live&quot;)for(var q=0,r=n.length;q&lt;r;q++)d.event.add(n[q],&quot;live.&quot;+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind(&quot;live.&quot;+F(h,m),f)}return this}}),d.each(&quot;blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error&quot;.split(&quot; &quot;),function(a,b){d.fn[b]=function(a,c){c==null&amp;&amp;(c=a,a=null);return arguments.length&gt;0?this.bind(b,a,c):this.trigger(b)},d.attrFn&amp;&amp;(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g&lt;h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!==&quot;string&quot;){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length&gt;0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g&lt;h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&amp;&amp;!f&amp;&amp;(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|[&#39;&quot;][^&#39;&quot;]*[&#39;&quot;]|[^\[\]&#39;&quot;]+)+\]|\\.|[^ &gt;+~,(\[\\]+)+|[&gt;+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&amp;&amp;d.nodeType!==9)return[];if(!b||typeof b!==&quot;string&quot;)return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(&quot;&quot;),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length&gt;1&amp;&amp;m.exec(b))if(x.length===2&amp;&amp;l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&amp;&amp;(b+=x.shift()),j=v(b,j)}else{!g&amp;&amp;x.length&gt;1&amp;&amp;d.nodeType===9&amp;&amp;!w&amp;&amp;l.match.ID.test(x[0])&amp;&amp;!l.match.ID.test(x[x.length-1])&amp;&amp;(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&amp;&amp;(x[0]===&quot;~&quot;||x[0]===&quot;+&quot;)&amp;&amp;d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length&gt;0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r=&quot;&quot;,s==null&amp;&amp;(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)===&quot;[object Array]&quot;)if(u)if(d&amp;&amp;d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&amp;&amp;(n[t]===!0||n[t].nodeType===1&amp;&amp;k.contains(d,n[t]))&amp;&amp;e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&amp;&amp;n[t].nodeType===1&amp;&amp;e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&amp;&amp;(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b&lt;a.length;b++)a[b]===a[b-1]&amp;&amp;a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length&gt;0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e&lt;f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!==&quot;\\&quot;){g[1]=(g[1]||&quot;&quot;).replace(i,&quot;&quot;),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],&quot;&quot;);break}}}}d||(d=typeof b.getElementsByTagName!==&quot;undefined&quot;?b.getElementsByTagName(&quot;*&quot;):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&amp;&amp;c[0]&amp;&amp;k.isXML(c[0]);while(a&amp;&amp;c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&amp;&amp;f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)===&quot;\\&quot;)continue;j===i&amp;&amp;(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&amp;&amp;o!=null?t?g=!0:j[s]=!1:t&amp;&amp;(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],&quot;&quot;);if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw&quot;Syntax error, unrecognized expression: &quot;+a};var l=k.selectors={order:[&quot;ID&quot;,&quot;NAME&quot;,&quot;TAG&quot;],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=[&#39;&quot;]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)[&#39;&quot;]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:([&#39;&quot;])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\(([&#39;&quot;]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{&quot;class&quot;:&quot;className&quot;,&quot;for&quot;:&quot;htmlFor&quot;},attrHandle:{href:function(a){return a.getAttribute(&quot;href&quot;)},type:function(a){return a.getAttribute(&quot;type&quot;)}},relative:{&quot;+&quot;:function(a,b){var c=typeof b===&quot;string&quot;,d=c&amp;&amp;!j.test(b),e=c&amp;&amp;!d;d&amp;&amp;(b=b.toLowerCase());for(var f=0,g=a.length,h;f&lt;g;f++)if(h=a[f]){while((h=h.previousSibling)&amp;&amp;h.nodeType!==1){}a[f]=e||h&amp;&amp;h.nodeName.toLowerCase()===b?h||!1:h===b}e&amp;&amp;k.filter(b,a,!0)},&quot;&gt;&quot;:function(a,b){var c,d=typeof b===&quot;string&quot;,e=0,f=a.length;if(d&amp;&amp;!j.test(b)){b=b.toLowerCase();for(;e&lt;f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e&lt;f;e++)c=a[e],c&amp;&amp;(a[e]=d?c.parentNode:c.parentNode===b);d&amp;&amp;k.filter(b,a,!0)}},&quot;&quot;:function(a,b,c){var d,f=e++,g=u;typeof b===&quot;string&quot;&amp;&amp;!j.test(b)&amp;&amp;(b=b.toLowerCase(),d=b,g=t),g(&quot;parentNode&quot;,b,f,a,d,c)},&quot;~&quot;:function(a,b,c){var d,f=e++,g=u;typeof b===&quot;string&quot;&amp;&amp;!j.test(b)&amp;&amp;(b=b.toLowerCase(),d=b,g=t),g(&quot;previousSibling&quot;,b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!==&quot;undefined&quot;&amp;&amp;!c){var d=b.getElementById(a[1]);return d&amp;&amp;d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!==&quot;undefined&quot;){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e&lt;f;e++)d[e].getAttribute(&quot;name&quot;)===a[1]&amp;&amp;c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!==&quot;undefined&quot;)return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=&quot; &quot;+a[1].replace(i,&quot;&quot;)+&quot; &quot;;if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&amp;&amp;(e^(h.className&amp;&amp;(&quot; &quot;+h.className+&quot; &quot;).replace(/[\t\n\r]/g,&quot; &quot;).indexOf(a)&gt;=0)?c||d.push(h):c&amp;&amp;(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,&quot;&quot;)},TAG:function(a,b){return a[1].replace(i,&quot;&quot;).toLowerCase()},CHILD:function(a){if(a[1]===&quot;nth&quot;){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,&quot;&quot;);var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]===&quot;even&quot;&amp;&amp;&quot;2n&quot;||a[2]===&quot;odd&quot;&amp;&amp;&quot;2n+1&quot;||!/\D/.test(a[2])&amp;&amp;&quot;0n+&quot;+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&amp;&amp;k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,&quot;&quot;);!f&amp;&amp;l.attrMap[g]&amp;&amp;(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||&quot;&quot;).replace(i,&quot;&quot;),a[2]===&quot;~=&quot;&amp;&amp;(a[4]=&quot; &quot;+a[4]+&quot; &quot;);return a},PSEUDO:function(b,c,d,e,f){if(b[1]===&quot;not&quot;)if((a.exec(b[3])||&quot;&quot;).length&gt;1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&amp;&amp;a.type!==&quot;hidden&quot;},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&amp;&amp;a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return&quot;text&quot;===a.getAttribute(&quot;type&quot;)},radio:function(a){return&quot;radio&quot;===a.type},checkbox:function(a){return&quot;checkbox&quot;===a.type},file:function(a){return&quot;file&quot;===a.type},password:function(a){return&quot;password&quot;===a.type},submit:function(a){return&quot;submit&quot;===a.type},image:function(a){return&quot;image&quot;===a.type},reset:function(a){return&quot;reset&quot;===a.type},button:function(a){return&quot;button&quot;===a.type||a.nodeName.toLowerCase()===&quot;button&quot;},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b&lt;c[3]-0},gt:function(a,b,c){return b&gt;c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e===&quot;contains&quot;)return(a.textContent||a.innerText||k.getText([a])||&quot;&quot;).indexOf(b[3])&gt;=0;if(e===&quot;not&quot;){var g=b[3];for(var h=0,i=g.length;h&lt;i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case&quot;only&quot;:case&quot;first&quot;:while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c===&quot;first&quot;)return!0;d=a;case&quot;last&quot;:while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case&quot;nth&quot;:var e=b[2],f=b[3];if(e===1&amp;&amp;f===0)return!0;var g=b[0],h=a.parentNode;if(h&amp;&amp;(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&amp;&amp;(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&amp;&amp;j/e&gt;=0}},ID:function(a,b){return a.nodeType===1&amp;&amp;a.getAttribute(&quot;id&quot;)===b},TAG:function(a,b){return b===&quot;*&quot;&amp;&amp;a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(&quot; &quot;+(a.className||a.getAttribute(&quot;class&quot;))+&quot; &quot;).indexOf(b)&gt;-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+&quot;&quot;,f=b[2],g=b[4];return d==null?f===&quot;!=&quot;:f===&quot;=&quot;?e===g:f===&quot;*=&quot;?e.indexOf(g)&gt;=0:f===&quot;~=&quot;?(&quot; &quot;+e+&quot; &quot;).indexOf(g)&gt;=0:g?f===&quot;!=&quot;?e!==g:f===&quot;^=&quot;?e.indexOf(g)===0:f===&quot;$=&quot;?e.substr(e.length-g.length)===g:f===&quot;|=&quot;?e===g||e.substr(0,g.length+1)===g+&quot;-&quot;:!1:e&amp;&amp;d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return&quot;\\&quot;+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)===&quot;[object Array]&quot;)Array.prototype.push.apply(d,a);else if(typeof a.length===&quot;number&quot;)for(var e=a.length;c&lt;e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&amp;4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k&lt;c&amp;&amp;k&lt;d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b=&quot;&quot;,c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&amp;&amp;(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement(&quot;div&quot;),d=&quot;script&quot;+(new Date).getTime(),e=c.documentElement;a.innerHTML=&quot;&lt;a name=&#39;&quot;+d+&quot;&#39;/&gt;&quot;,e.insertBefore(a,e.firstChild),c.getElementById(d)&amp;&amp;(l.find.ID=function(a,c,d){if(typeof c.getElementById!==&quot;undefined&quot;&amp;&amp;!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!==&quot;undefined&quot;&amp;&amp;e.getAttributeNode(&quot;id&quot;).nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!==&quot;undefined&quot;&amp;&amp;a.getAttributeNode(&quot;id&quot;);return a.nodeType===1&amp;&amp;c&amp;&amp;c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement(&quot;div&quot;);a.appendChild(c.createComment(&quot;&quot;)),a.getElementsByTagName(&quot;*&quot;).length&gt;0&amp;&amp;(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]===&quot;*&quot;){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&amp;&amp;d.push(c[e]);c=d}return c}),a.innerHTML=&quot;&lt;a href=&#39;#&#39;&gt;&lt;/a&gt;&quot;,a.firstChild&amp;&amp;typeof a.firstChild.getAttribute!==&quot;undefined&quot;&amp;&amp;a.firstChild.getAttribute(&quot;href&quot;)!==&quot;#&quot;&amp;&amp;(l.attrHandle.href=function(a){return a.getAttribute(&quot;href&quot;,2)}),a=null}(),c.querySelectorAll&amp;&amp;function(){var a=k,b=c.createElement(&quot;div&quot;),d=&quot;__sizzle__&quot;;b.innerHTML=&quot;&lt;p class=&#39;TEST&#39;&gt;&lt;/p&gt;&quot;;if(!b.querySelectorAll||b.querySelectorAll(&quot;.TEST&quot;).length!==0){k=function(b,e,f,g){e=e||c;if(!g&amp;&amp;!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&amp;&amp;(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&amp;&amp;l.find.CLASS&amp;&amp;e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b===&quot;body&quot;&amp;&amp;e.body)return p([e.body],f);if(h&amp;&amp;h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&amp;&amp;e.nodeName.toLowerCase()!==&quot;object&quot;){var m=e,n=e.getAttribute(&quot;id&quot;),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/&#39;/g,&quot;\\$&amp;&quot;):e.setAttribute(&quot;id&quot;,o),r&amp;&amp;q&amp;&amp;(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll(&quot;[id=&#39;&quot;+o+&quot;&#39;] &quot;+b),f)}catch(s){}finally{n||m.removeAttribute(&quot;id&quot;)}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,&quot;[test!=&#39;&#39;]:sizzle&quot;)}catch(e){d=!0}b&amp;&amp;(k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^&#39;&quot;\]]*)\s*\]/g,&quot;=&#39;$1&#39;]&quot;);if(!k.isXML(a))try{if(d||!l.match.PSEUDO.test(c)&amp;&amp;!/!=/.test(c))return b.call(a,c)}catch(e){}return k(c,null,null,[a]).length&gt;0})}(),function(){var a=c.createElement(&quot;div&quot;);a.innerHTML=&quot;&lt;div class=&#39;test e&#39;&gt;&lt;/div&gt;&lt;div class=&#39;test&#39;&gt;&lt;/div&gt;&quot;;if(a.getElementsByClassName&amp;&amp;a.getElementsByClassName(&quot;e&quot;).length!==0){a.lastChild.className=&quot;e&quot;;if(a.getElementsByClassName(&quot;e&quot;).length===1)return;l.order.splice(1,0,&quot;CLASS&quot;),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==&quot;undefined&quot;&amp;&amp;!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&amp;&amp;(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&amp;16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!==&quot;HTML&quot;:!1};var v=function(a,b){var c,d=[],e=&quot;&quot;,f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,&quot;&quot;);a=l.relative[a]?a+&quot;*&quot;:a;for(var g=0,h=f.length;g&lt;h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[&quot;:&quot;]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack(&quot;&quot;,&quot;find&quot;,a),c=0;for(var e=0,f=this.length;e&lt;f;e++){c=b.length,d.find(a,this[e],b);if(e&gt;0)for(var g=c;g&lt;b.length;g++)for(var h=0;h&lt;c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a&lt;c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),&quot;not&quot;,a)},filter:function(a){return this.pushStack(O(this,a,!0),&quot;filter&quot;,a)},is:function(a){return!!a&amp;&amp;d.filter(a,this).length&gt;0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&amp;&amp;a.length){for(e=0,f=a.length;e&lt;f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&amp;&amp;g.ownerDocument&amp;&amp;g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)&gt;-1:d(g).is(h))&amp;&amp;c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e&lt;f;e++){g=this[e];while(g){if(l?l.index(g)&gt;-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length&gt;1?d.unique(c):c;return this.pushStack(c,&quot;closest&quot;,a)},index:function(a){if(!a||typeof a===&quot;string&quot;)return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a===&quot;string&quot;?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&amp;&amp;b.nodeType!==11?b:null},parents:function(a){return d.dir(a,&quot;parentNode&quot;)},parentsUntil:function(a,b,c){return d.dir(a,&quot;parentNode&quot;,c)},next:function(a){return d.nth(a,2,&quot;nextSibling&quot;)},prev:function(a){return d.nth(a,2,&quot;previousSibling&quot;)},nextAll:function(a){return d.dir(a,&quot;nextSibling&quot;)},prevAll:function(a){return d.dir(a,&quot;previousSibling&quot;)},nextUntil:function(a,b,c){return d.dir(a,&quot;nextSibling&quot;,c)},prevUntil:function(a,b,c){return d.dir(a,&quot;previousSibling&quot;,c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,&quot;iframe&quot;)?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&amp;&amp;typeof e===&quot;string&quot;&amp;&amp;(f=d.filter(e,f)),f=this.length&gt;1&amp;&amp;!M[a]?d.unique(f):f,(this.length&gt;1||I.test(e))&amp;&amp;H.test(a)&amp;&amp;(f=f.reverse());return this.pushStack(f,a,g.join(&quot;,&quot;))}}),d.extend({filter:function(a,b,c){c&amp;&amp;(a=&quot;:not(&quot;+a+&quot;)&quot;);return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&amp;&amp;g.nodeType!==9&amp;&amp;(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&amp;&amp;f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&amp;&amp;++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&amp;&amp;a!==b&amp;&amp;c.push(a);return c}});var P=/ jQuery\d+=&quot;(?:\d+|null)&quot;/g,Q=/^\s+/,R=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/ig,S=/&lt;([\w:]+)/,T=/&lt;tbody/i,U=/&lt;|&amp;#?\w+;/,V=/&lt;(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,&quot;&lt;select multiple=&#39;multiple&#39;&gt;&quot;,&quot;&lt;/select&gt;&quot;],legend:[1,&quot;&lt;fieldset&gt;&quot;,&quot;&lt;/fieldset&gt;&quot;],thead:[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;],tr:[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;],td:[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;],col:[2,&quot;&lt;table&gt;&lt;tbody&gt;&lt;/tbody&gt;&lt;colgroup&gt;&quot;,&quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;],area:[1,&quot;&lt;map&gt;&quot;,&quot;&lt;/map&gt;&quot;],_default:[0,&quot;&quot;,&quot;&quot;]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,&quot;div&lt;div&gt;&quot;,&quot;&lt;/div&gt;&quot;]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!==&quot;object&quot;&amp;&amp;a!==b)return this.empty().append((this[0]&amp;&amp;this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&amp;&amp;b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&amp;&amp;a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,&quot;body&quot;)||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&amp;&amp;this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&amp;&amp;this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&amp;&amp;this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,&quot;before&quot;,arguments)}},after:function(){if(this[0]&amp;&amp;this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,&quot;after&quot;,arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&amp;&amp;e.nodeType===1&amp;&amp;(d.cleanData(e.getElementsByTagName(&quot;*&quot;)),d.cleanData([e])),e.parentNode&amp;&amp;e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&amp;&amp;d.cleanData(b.getElementsByTagName(&quot;*&quot;));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&amp;&amp;this[0].nodeType===1?this[0].innerHTML.replace(P,&quot;&quot;):null;if(typeof a!==&quot;string&quot;||V.test(a)||!d.support.leadingWhitespace&amp;&amp;Q.test(a)||X[(S.exec(a)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);try{for(var c=0,e=this.length;c&lt;e;c++)this[c].nodeType===1&amp;&amp;(d.cleanData(this[c].getElementsByTagName(&quot;*&quot;)),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&amp;&amp;this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!==&quot;string&quot;&amp;&amp;(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),&quot;replaceWith&quot;,a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&amp;&amp;arguments.length===3&amp;&amp;typeof j===&quot;string&quot;&amp;&amp;W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&amp;&amp;j.parentNode,d.support.parentNode&amp;&amp;i&amp;&amp;i.nodeType===11&amp;&amp;i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&amp;&amp;d.nodeName(g,&quot;tr&quot;);for(var l=0,m=this.length,n=m-1;l&lt;m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m&gt;1&amp;&amp;l&lt;n?d.clone(h,!0,!0):h)}k.length&amp;&amp;d.each(k,ba)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&amp;&amp;b[0]?b[0].ownerDocument||b[0]:c;a.length===1&amp;&amp;typeof a[0]===&quot;string&quot;&amp;&amp;a[0].length&lt;512&amp;&amp;i===c&amp;&amp;a[0].charAt(0)===&quot;&lt;&quot;&amp;&amp;!V.test(a[0])&amp;&amp;(d.support.checkClone||!W.test(a[0]))&amp;&amp;(g=!0,h=d.fragments[a[0]],h&amp;&amp;(h!==1&amp;&amp;(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&amp;&amp;(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:&quot;append&quot;,prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&amp;&amp;this[0].parentNode;if(g&amp;&amp;g.nodeType===11&amp;&amp;g.childNodes.length===1&amp;&amp;f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h&lt;i;h++){var j=(h&gt;0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&amp;&amp;(a.nodeType===1||a.nodeType===11)&amp;&amp;!d.isXMLDoc(a)){$(a,e),f=_(a),g=_(e);for(h=0;f[h];++h)$(f[h],g[h])}if(b){Z(a,e);if(c){f=_(a),g=_(e);for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement===&quot;undefined&quot;&amp;&amp;(b=b.ownerDocument||b[0]&amp;&amp;b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i===&quot;number&quot;&amp;&amp;(i+=&quot;&quot;);if(!i)continue;if(typeof i!==&quot;string&quot;||U.test(i)){if(typeof i===&quot;string&quot;){i=i.replace(R,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);var j=(S.exec(i)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement(&quot;div&quot;);m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j===&quot;table&quot;&amp;&amp;!n?m.firstChild&amp;&amp;m.firstChild.childNodes:k[1]===&quot;&lt;table&gt;&quot;&amp;&amp;!n?m.childNodes:[];for(var p=o.length-1;p&gt;=0;--p)d.nodeName(o[p],&quot;tbody&quot;)&amp;&amp;!o[p].childNodes.length&amp;&amp;o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&amp;&amp;Q.test(i)&amp;&amp;m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],&quot;script&quot;)||g[h].type&amp;&amp;g[h].type.toLowerCase()!==&quot;text/javascript&quot;?(g[h].nodeType===1&amp;&amp;g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName(&quot;script&quot;)))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&amp;&amp;d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&amp;&amp;e[c][f];if(b&amp;&amp;b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&amp;&amp;(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&amp;&amp;j.removeAttribute(d.expando),delete e[c]}}}});var bb=/alpha\([^)]*\)/i,bc=/opacity=([^)]*)/,bd=/-([a-z])/ig,be=/([A-Z])/g,bf=/^-?\d+(?:px)?$/i,bg=/^-?\d/,bh={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},bi=[&quot;Left&quot;,&quot;Right&quot;],bj=[&quot;Top&quot;,&quot;Bottom&quot;],bk,bl,bm,bn=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&amp;&amp;c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bk(a,&quot;opacity&quot;,&quot;opacity&quot;);return c===&quot;&quot;?&quot;1&quot;:c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{&quot;float&quot;:d.support.cssFloat?&quot;cssFloat&quot;:&quot;styleFloat&quot;},style:function(a,c,e,f){if(a&amp;&amp;a.nodeType!==3&amp;&amp;a.nodeType!==8&amp;&amp;a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&amp;&amp;&quot;get&quot;in j&amp;&amp;(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e===&quot;number&quot;&amp;&amp;isNaN(e)||e==null)return;typeof e===&quot;number&quot;&amp;&amp;!d.cssNumber[h]&amp;&amp;(e+=&quot;px&quot;);if(!j||!(&quot;set&quot;in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&amp;&amp;&quot;get&quot;in h&amp;&amp;(f=h.get(a,!0,e))!==b)return f;if(bk)return bk(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bd,bn)}}),d.curCSS=d.css,d.each([&quot;height&quot;,&quot;width&quot;],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bo(a,b,e):d.swap(a,bh,function(){f=bo(a,b,e)});if(f&lt;=0){f=bk(a,b,b),f===&quot;0px&quot;&amp;&amp;bm&amp;&amp;(f=bm(a,b,b));if(f!=null)return f===&quot;&quot;||f===&quot;auto&quot;?&quot;0px&quot;:f}if(f&lt;0||f==null){f=a.style[b];return f===&quot;&quot;||f===&quot;auto&quot;?&quot;0px&quot;:f}return typeof f===&quot;string&quot;?f:f+&quot;px&quot;}},set:function(a,b){if(!bf.test(b))return b;b=parseFloat(b);if(b&gt;=0)return b+&quot;px&quot;}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bc.test((b&amp;&amp;a.currentStyle?a.currentStyle.filter:a.style.filter)||&quot;&quot;)?parseFloat(RegExp.$1)/100+&quot;&quot;:b?&quot;1&quot;:&quot;&quot;},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?&quot;&quot;:&quot;alpha(opacity=&quot;+b*100+&quot;)&quot;,f=c.filter||&quot;&quot;;c.filter=bb.test(f)?f.replace(bb,e):c.filter+&quot; &quot;+e}}),c.defaultView&amp;&amp;c.defaultView.getComputedStyle&amp;&amp;(bl=function(a,c,e){var f,g,h;e=e.replace(be,&quot;-$1&quot;).toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===&quot;&quot;&amp;&amp;!d.contains(a.ownerDocument.documentElement,a)&amp;&amp;(f=d.style(a,e));return f}),c.documentElement.currentStyle&amp;&amp;(bm=function(a,b){var c,d=a.currentStyle&amp;&amp;a.currentStyle[b],e=a.runtimeStyle&amp;&amp;a.runtimeStyle[b],f=a.style;!bf.test(d)&amp;&amp;bg.test(d)&amp;&amp;(c=f.left,e&amp;&amp;(a.runtimeStyle.left=a.currentStyle.left),f.left=b===&quot;fontSize&quot;?&quot;1em&quot;:d||0,d=f.pixelLeft+&quot;px&quot;,f.left=c,e&amp;&amp;(a.runtimeStyle.left=e));return d===&quot;&quot;?&quot;auto&quot;:d}),bk=bl||bm,d.expr&amp;&amp;d.expr.filters&amp;&amp;(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&amp;&amp;c===0||!d.support.reliableHiddenOffsets&amp;&amp;(a.style.display||d.css(a,&quot;display&quot;))===&quot;none&quot;},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bp=/%20/g,bq=/\[\]$/,br=/\r?\n/g,bs=/#.*$/,bt=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bu=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bv=/(?:^file|^widget|\-extension):$/,bw=/^(?:GET|HEAD)$/,bx=/^\/\//,by=/\?/,bz=/&lt;script\b[^&lt;]*(?:(?!&lt;\/script&gt;)&lt;[^&lt;]*)*&lt;\/script&gt;/gi,bA=/^(?:select|textarea)/i,bB=/\s+/,bC=/([?&amp;])_=[^&amp;]*/,bD=/(^|\-)([a-z])/g,bE=function(a,b,c){return b+c.toUpperCase()},bF=/^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,bG=d.fn.load,bH={},bI={},bJ,bK;try{bJ=c.location.href}catch(bL){bJ=c.createElement(&quot;a&quot;),bJ.href=&quot;&quot;,bJ=bJ.href}bK=bF.exec(bJ.toLowerCase()),d.fn.extend({load:function(a,c,e){if(typeof a!==&quot;string&quot;&amp;&amp;bG)return bG.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(&quot; &quot;);if(f&gt;=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h=&quot;GET&quot;;c&amp;&amp;(d.isFunction(c)?(e=c,c=b):typeof c===&quot;object&quot;&amp;&amp;(c=d.param(c,d.ajaxSettings.traditional),h=&quot;POST&quot;));var i=this;d.ajax({url:a,type:h,dataType:&quot;html&quot;,data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&amp;&amp;(a.done(function(a){c=a}),i.html(g?d(&quot;&lt;div&gt;&quot;).append(c.replace(bz,&quot;&quot;)).find(g):c)),e&amp;&amp;i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&amp;&amp;!this.disabled&amp;&amp;(this.checked||bA.test(this.nodeName)||bu.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(br,&quot;\r\n&quot;)}}):{name:b.name,value:c.replace(br,&quot;\r\n&quot;)}}).get()}}),d.each(&quot;ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend&quot;.split(&quot; &quot;),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each([&quot;get&quot;,&quot;post&quot;],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&amp;&amp;(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,&quot;script&quot;)},getJSON:function(a,b,c){return d.get(a,b,c,&quot;json&quot;)},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&amp;&amp;(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bJ,isLocal:bv.test(bK[1]),global:!0,type:&quot;GET&quot;,contentType:&quot;application/x-www-form-urlencoded&quot;,processData:!0,async:!0,accepts:{xml:&quot;application/xml, text/xml&quot;,html:&quot;text/html&quot;,text:&quot;text/plain&quot;,json:&quot;application/json, text/javascript&quot;,&quot;*&quot;:&quot;*/*&quot;},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:&quot;responseXML&quot;,text:&quot;responseText&quot;},converters:{&quot;* text&quot;:a.String,&quot;text html&quot;:!0,&quot;text json&quot;:d.parseJSON,&quot;text xml&quot;:d.parseXML}},ajaxPrefilter:bM(bH),ajaxTransport:bM(bI),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&amp;&amp;clearTimeout(p),o=b,m=n||&quot;&quot;,u.readyState=a?4:0;var q,t,v,w=l?bP(e,u,l):b,x,y;if(a&gt;=200&amp;&amp;a&lt;300||a===304){if(e.ifModified){if(x=u.getResponseHeader(&quot;Last-Modified&quot;))d.lastModified[k]=x;if(y=u.getResponseHeader(&quot;Etag&quot;))d.etag[k]=y}if(a===304)c=&quot;notmodified&quot;,q=!0;else try{t=bQ(e,w),c=&quot;success&quot;,q=!0}catch(z){c=&quot;parsererror&quot;,v=z}}else{v=c;if(!c||a)c=&quot;error&quot;,a&lt;0&amp;&amp;(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&amp;&amp;g.trigger(&quot;ajax&quot;+(q?&quot;Success&quot;:&quot;Error&quot;),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&amp;&amp;(g.trigger(&quot;ajaxComplete&quot;,[u,e]),--d.active||d.event.trigger(&quot;ajaxStop&quot;))}}typeof a===&quot;object&quot;&amp;&amp;(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&amp;&amp;(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bD,bE)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bt.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||&quot;abort&quot;,o&amp;&amp;o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r&lt;2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+&quot;&quot;).replace(bs,&quot;&quot;).replace(bx,bK[1]+&quot;//&quot;),e.dataTypes=d.trim(e.dataType||&quot;*&quot;).toLowerCase().split(bB),e.crossDomain||(q=bF.exec(e.url.toLowerCase()),e.crossDomain=q&amp;&amp;(q[1]!=bK[1]||q[2]!=bK[2]||(q[3]||(q[1]===&quot;http:&quot;?80:443))!=(bK[3]||(bK[1]===&quot;http:&quot;?80:443)))),e.data&amp;&amp;e.processData&amp;&amp;typeof e.data!==&quot;string&quot;&amp;&amp;(e.data=d.param(e.data,e.traditional)),bN(bH,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!bw.test(e.type),s&amp;&amp;d.active++===0&amp;&amp;d.event.trigger(&quot;ajaxStart&quot;);if(!e.hasContent){e.data&amp;&amp;(e.url+=(by.test(e.url)?&quot;&amp;&quot;:&quot;?&quot;)+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bC,&quot;$1_=&quot;+w);e.url=x+(x===e.url?(by.test(e.url)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+w:&quot;&quot;)}}if(e.data&amp;&amp;e.hasContent&amp;&amp;e.contentType!==!1||c.contentType)l[&quot;Content-Type&quot;]=e.contentType;e.ifModified&amp;&amp;(k=k||e.url,d.lastModified[k]&amp;&amp;(l[&quot;If-Modified-Since&quot;]=d.lastModified[k]),d.etag[k]&amp;&amp;(l[&quot;If-None-Match&quot;]=d.etag[k])),l.Accept=e.dataTypes[0]&amp;&amp;e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!==&quot;*&quot;?&quot;, */*; q=0.01&quot;:&quot;&quot;):e.accepts[&quot;*&quot;];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&amp;&amp;(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bN(bI,e,c,u);if(o){u.readyState=1,s&amp;&amp;g.trigger(&quot;ajaxSend&quot;,[u,e]),e.async&amp;&amp;e.timeout&gt;0&amp;&amp;(p=setTimeout(function(){u.abort(&quot;timeout&quot;)},e.timeout));try{r=1,o.send(l,v)}catch(y){status&lt;2?v(-1,y):d.error(y)}}else v(-1,&quot;No Transport&quot;);return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+&quot;=&quot;+encodeURIComponent(b)};c===b&amp;&amp;(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&amp;&amp;!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bO(g,a[g],c,f);return e.join(&quot;&amp;&quot;).replace(bp,&quot;+&quot;)}}),d.extend({active:0,lastModified:{},etag:{}});var bR=d.now(),bS=/(\=)\?(&amp;|$)|()\?\?()/i;d.ajaxSetup({jsonp:&quot;callback&quot;,jsonpCallback:function(){return d.expando+&quot;_&quot;+bR++}}),d.ajaxPrefilter(&quot;json jsonp&quot;,function(b,c,e){var f=typeof b.data===&quot;string&quot;;if(b.dataTypes[0]===&quot;jsonp&quot;||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&amp;&amp;(bS.test(b.url)||f&amp;&amp;bS.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l=&quot;$1&quot;+h+&quot;$2&quot;,m=function(){a[h]=i,g&amp;&amp;d.isFunction(i)&amp;&amp;a[h](g[0])};b.jsonp!==!1&amp;&amp;(j=j.replace(bS,l),b.url===j&amp;&amp;(f&amp;&amp;(k=k.replace(bS,l)),b.data===k&amp;&amp;(j+=(/\?/.test(j)?&quot;&amp;&quot;:&quot;?&quot;)+b.jsonp+&quot;=&quot;+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters[&quot;script json&quot;]=function(){g||d.error(h+&quot; was not called&quot;);return g[0]},b.dataTypes[0]=&quot;json&quot;;return&quot;script&quot;}}),d.ajaxSetup({accepts:{script:&quot;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&quot;},contents:{script:/javascript|ecmascript/},converters:{&quot;text script&quot;:function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter(&quot;script&quot;,function(a){a.cache===b&amp;&amp;(a.cache=!1),a.crossDomain&amp;&amp;(a.type=&quot;GET&quot;,a.global=!1)}),d.ajaxTransport(&quot;script&quot;,function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName(&quot;head&quot;)[0]||c.documentElement;return{send:function(f,g){d=c.createElement(&quot;script&quot;),d.async=&quot;async&quot;,a.scriptCharset&amp;&amp;(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&amp;&amp;d.parentNode&amp;&amp;e.removeChild(d),d=b,c||g(200,&quot;success&quot;)},e.insertBefore(d,e.firstChild)},abort:function(){d&amp;&amp;d.onload(0,1)}}}});var bT=d.now(),bU,bV;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&amp;&amp;bX()||bY()}:bX,bV=d.ajaxSettings.xhr(),d.support.ajax=!!bV,d.support.cors=bV&amp;&amp;&quot;withCredentials&quot;in bV,bV=b,d.support.ajax&amp;&amp;d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&amp;&amp;g.overrideMimeType&amp;&amp;g.overrideMimeType(a.mimeType),(!a.crossDomain||a.hasContent)&amp;&amp;!e[&quot;X-Requested-With&quot;]&amp;&amp;(e[&quot;X-Requested-With&quot;]=&quot;XMLHttpRequest&quot;);try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&amp;&amp;a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&amp;&amp;(i||g.readyState===4)){c=b,h&amp;&amp;(g.onreadystatechange=d.noop,delete bU[h]);if(i)g.readyState!==4&amp;&amp;g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&amp;&amp;n.documentElement&amp;&amp;(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=&quot;&quot;}j||!a.isLocal||a.crossDomain?j===1223&amp;&amp;(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&amp;&amp;f(j,k,m,l)},a.async&amp;&amp;g.readyState!==4?(bU||(bU={},bW()),h=bT++,g.onreadystatechange=bU[h]=c):c()},abort:function(){c&amp;&amp;c(0,1)}}}});var bZ={},b$=/^(?:toggle|show|hide)$/,b_=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ca,cb=[[&quot;height&quot;,&quot;marginTop&quot;,&quot;marginBottom&quot;,&quot;paddingTop&quot;,&quot;paddingBottom&quot;],[&quot;width&quot;,&quot;marginLeft&quot;,&quot;marginRight&quot;,&quot;paddingLeft&quot;,&quot;paddingRight&quot;],[&quot;opacity&quot;]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(cc(&quot;show&quot;,3),a,b,c);for(var g=0,h=this.length;g&lt;h;g++)e=this[g],f=e.style.display,!d._data(e,&quot;olddisplay&quot;)&amp;&amp;f===&quot;none&quot;&amp;&amp;(f=e.style.display=&quot;&quot;),f===&quot;&quot;&amp;&amp;d.css(e,&quot;display&quot;)===&quot;none&quot;&amp;&amp;d._data(e,&quot;olddisplay&quot;,cd(e.nodeName));for(g=0;g&lt;h;g++){e=this[g],f=e.style.display;if(f===&quot;&quot;||f===&quot;none&quot;)e.style.display=d._data(e,&quot;olddisplay&quot;)||&quot;&quot;}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cc(&quot;hide&quot;,3),a,b,c);for(var e=0,f=this.length;e&lt;f;e++){var g=d.css(this[e],&quot;display&quot;);g!==&quot;none&quot;&amp;&amp;!d._data(this[e],&quot;olddisplay&quot;)&amp;&amp;d._data(this[e],&quot;olddisplay&quot;,g)}for(e=0;e&lt;f;e++)this[e].style.display=&quot;none&quot;;return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a===&quot;boolean&quot;;d.isFunction(a)&amp;&amp;d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(&quot;:hidden&quot;);d(this)[b?&quot;show&quot;:&quot;hide&quot;]()}):this.animate(cc(&quot;toggle&quot;,3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(&quot;:hidden&quot;).css(&quot;opacity&quot;,0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?&quot;each&quot;:&quot;queue&quot;](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&amp;&amp;d(this).is(&quot;:hidden&quot;),h=this;for(c in a){var i=d.camelCase(c);c!==i&amp;&amp;(a[i]=a[c],delete a[c],c=i);if(a[c]===&quot;hide&quot;&amp;&amp;g||a[c]===&quot;show&quot;&amp;&amp;!g)return b.complete.call(this);if(e&amp;&amp;(c===&quot;height&quot;||c===&quot;width&quot;)){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,&quot;display&quot;)===&quot;inline&quot;&amp;&amp;d.css(this,&quot;float&quot;)===&quot;none&quot;)if(d.support.inlineBlockNeedsLayout){var j=cd(this.nodeName);j===&quot;inline&quot;?this.style.display=&quot;inline-block&quot;:(this.style.display=&quot;inline&quot;,this.style.zoom=1)}else this.style.display=&quot;inline-block&quot;}d.isArray(a[c])&amp;&amp;((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&amp;&amp;(this.style.overflow=&quot;hidden&quot;),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(b$.test(e))f[e===&quot;toggle&quot;?g?&quot;show&quot;:&quot;hide&quot;:e](a);else{var i=b_.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?&quot;&quot;:&quot;px&quot;);l!==&quot;px&quot;&amp;&amp;(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&amp;&amp;(k=(i[1]===&quot;-=&quot;?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,&quot;&quot;)}});return!0})},stop:function(a,b){var c=d.timers;a&amp;&amp;this.queue([]),this.each(function(){for(var a=c.length-1;a&gt;=0;a--)c[a].elem===this&amp;&amp;(b&amp;&amp;c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:cc(&quot;show&quot;,1),slideUp:cc(&quot;hide&quot;,1),slideToggle:cc(&quot;toggle&quot;,1),fadeIn:{opacity:&quot;show&quot;},fadeOut:{opacity:&quot;hide&quot;},fadeToggle:{opacity:&quot;toggle&quot;}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&amp;&amp;typeof a===&quot;object&quot;?d.extend({},a):{complete:c||!c&amp;&amp;b||d.isFunction(a)&amp;&amp;a,duration:a,easing:c&amp;&amp;b||b&amp;&amp;!d.isFunction(b)&amp;&amp;b};e.duration=d.fx.off?0:typeof e.duration===&quot;number&quot;?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&amp;&amp;d(this).dequeue(),d.isFunction(e.old)&amp;&amp;e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&amp;&amp;(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b===&quot;auto&quot;?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?&quot;&quot;:&quot;px&quot;),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&amp;&amp;d.timers.push(g)&amp;&amp;!ca&amp;&amp;(ca=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop===&quot;width&quot;||this.prop===&quot;height&quot;?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b&gt;=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&amp;&amp;(c=!1);if(c){if(this.options.overflow!=null&amp;&amp;!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each([&quot;&quot;,&quot;X&quot;,&quot;Y&quot;],function(a,b){f.style[&quot;overflow&quot;+b]=g.overflow[a]})}this.options.hide&amp;&amp;d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&amp;&amp;this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?&quot;swing&quot;:&quot;linear&quot;);this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b&lt;a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(ca),ca=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,&quot;opacity&quot;,a.now)},_default:function(a){a.elem.style&amp;&amp;a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop===&quot;width&quot;||a.prop===&quot;height&quot;?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&amp;&amp;d.expr.filters&amp;&amp;(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var ce=/^t(?:able|d|h)$/i,cf=/^(?:body|html)$/i;&quot;getBoundingClientRect&quot;in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=cg(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&amp;&amp;g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&amp;&amp;g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&amp;&amp;b!==i&amp;&amp;b!==h){if(d.offset.supportsFixedPosition&amp;&amp;k.position===&quot;fixed&quot;)break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&amp;&amp;(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&amp;&amp;(!d.offset.doesAddBorderForTableAndCells||!ce.test(b.nodeName))&amp;&amp;(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&amp;&amp;c.overflow!==&quot;visible&quot;&amp;&amp;(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position===&quot;relative&quot;||k.position===&quot;static&quot;)l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&amp;&amp;k.position===&quot;fixed&quot;&amp;&amp;(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement(&quot;div&quot;),e,f,g,h,i=parseFloat(d.css(a,&quot;marginTop&quot;))||0,j=&quot;&lt;div style=&#39;position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;&#39;&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;&lt;table style=&#39;position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;&#39; cellpadding=&#39;0&#39; cellspacing=&#39;0&#39;&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;;d.extend(b.style,{position:&quot;absolute&quot;,top:0,left:0,margin:0,border:0,width:&quot;1px&quot;,height:&quot;1px&quot;,visibility:&quot;hidden&quot;}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position=&quot;fixed&quot;,f.style.top=&quot;20px&quot;,this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top=&quot;&quot;,e.style.overflow=&quot;hidden&quot;,e.style.position=&quot;relative&quot;,this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&amp;&amp;(b+=parseFloat(d.css(a,&quot;marginTop&quot;))||0,c+=parseFloat(d.css(a,&quot;marginLeft&quot;))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,&quot;position&quot;);e===&quot;static&quot;&amp;&amp;(a.style.position=&quot;relative&quot;);var f=d(a),g=f.offset(),h=d.css(a,&quot;top&quot;),i=d.css(a,&quot;left&quot;),j=e===&quot;absolute&quot;&amp;&amp;d.inArray(&quot;auto&quot;,[h,i])&gt;-1,k={},l={},m,n;j&amp;&amp;(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&amp;&amp;(b=b.call(a,c,g)),b.top!=null&amp;&amp;(k.top=b.top-g.top+m),b.left!=null&amp;&amp;(k.left=b.left-g.left+n),&quot;using&quot;in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=cf.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,&quot;marginTop&quot;))||0,c.left-=parseFloat(d.css(a,&quot;marginLeft&quot;))||0,e.top+=parseFloat(d.css(b[0],&quot;borderTopWidth&quot;))||0,e.left+=parseFloat(d.css(b[0],&quot;borderLeftWidth&quot;))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&amp;&amp;(!cf.test(a.nodeName)&amp;&amp;d.css(a,&quot;position&quot;)===&quot;static&quot;))a=a.offsetParent;return a})}}),d.each([&quot;Left&quot;,&quot;Top&quot;],function(a,c){var e=&quot;scroll&quot;+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=cg(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=cg(f);return g?&quot;pageXOffset&quot;in g?g[a?&quot;pageYOffset&quot;:&quot;pageXOffset&quot;]:d.support.boxModel&amp;&amp;g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each([&quot;Height&quot;,&quot;Width&quot;],function(a,c){var e=c.toLowerCase();d.fn[&quot;inner&quot;+c]=function(){return this[0]?parseFloat(d.css(this[0],e,&quot;padding&quot;)):null},d.fn[&quot;outer&quot;+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?&quot;margin&quot;:&quot;border&quot;)):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement[&quot;client&quot;+c];return f.document.compatMode===&quot;CSS1Compat&quot;&amp;&amp;g||f.document.body[&quot;client&quot;+c]||g}if(f.nodeType===9)return Math.max(f.documentElement[&quot;client&quot;+c],f.body[&quot;scroll&quot;+c],f.documentElement[&quot;scroll&quot;+c],f.body[&quot;offset&quot;+c],f.documentElement[&quot;offset&quot;+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a===&quot;string&quot;?a:a+&quot;px&quot;)}}),a.jQuery=a.$=d})(window);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.28376s from github-fe131-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-+BdcIzYLQqTrGLIxn+/q4lLP7qSC+4BDVvQTalK/3bM=" src="https://assets-cdn.github.com/assets/frameworks-f8175c23360b42a4eb18b2319fefeae252cfeea482fb804356f4136a52bfddb3.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-FQIQT0UMsFhZ+ZtX4peC4HHj+yQOI3rbjL8X672yccc=" src="https://assets-cdn.github.com/assets/github-1502104f450cb05859f99b57e29782e071e3fb240e237adb8cbf17ebbdb271c7.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

