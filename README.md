# Alfred

Alfred is a ServiceNow Fluent application that tracks the time you spend on activities and helps you spot work that could be delegated. Each entry records an activity, a date, a duration, and a category (Only Me, Delegate Now, Delegate Later). A custom dashboard summarizes where your time goes.

This guide explains how to clone the repository and run Alfred on your own ServiceNow instance using the ServiceNow SDK.

## Prerequisites

1. **A ServiceNow instance** you can install apps on. A Personal Developer Instance (PDI) works well. Get one free at https://developer.servicenow.com.
2. **Node.js 20 LTS.** Check with `node --version`. Install from https://nodejs.org or via a package manager.
3. **Git.** To clone the repository.

The ServiceNow SDK itself is pinned as a dev dependency in this project, so you do not need to install it globally. You will run it with `npx now-sdk`.

## Setup

1. Clone the repository.
   ```
   git clone https://github.com/manshuv/alfred.git
   cd alfred
   ```

2. Install dependencies.
   ```
   npm install
   ```

## Authenticate to your instance

Register your instance credentials with the SDK. OAuth is recommended because it works with SSO and does not store a password locally.

```
npx now-sdk auth --add https://YOUR-INSTANCE.service-now.com/ --type oauth --alias my-instance
```

Run this in a real terminal. It opens a browser for you to log in, then asks you to paste a code back into the prompt. Interactive prompts like this need a real terminal session to work.

Confirm the credential is stored:
```
npx now-sdk auth --list
```

## Build

Compile and type check the app locally before deploying. This catches most errors without touching your instance.

```
npx now-sdk build
```

## Deploy to your instance

```
npx now-sdk install
```

On success the SDK prints a link to the installed application and a rollback link you can use to undo the install if needed.

## Open the app

After install, open these on your instance (replace the host):

- Application record: `https://YOUR-INSTANCE.service-now.com/sys_app.do`
- Time Entries table: `https://YOUR-INSTANCE.service-now.com/x_snc_alfred_time_entries_list.do`
- Dashboard: `https://YOUR-INSTANCE.service-now.com/x_snc_alfred_dashboard.do`

If the dashboard looks stale, do a hard refresh in your browser to clear the cached UI bundle.

## The development loop

Once set up, your day to day cycle is just two commands:

```
npx now-sdk build && npx now-sdk install
```

Edit the source locally, build, install, then refresh your instance.

## A note on sample data and the dashboard

The repository ships with sample time entries. The dashboard only shows entries from the last 7, 14, or 30 days, so older sample rows may not appear depending on the current date. Create a few entries dated today to see the dashboard populate.

## How code reaches the instance

Git and your instance are two separate destinations. You version your code in Git, and you deploy to the instance with `npx now-sdk install`. The instance is not driven by Git in this setup. If you customize the app, a good habit is to commit your changes first, then deploy from a clean working tree, so what runs on the instance always maps to a known commit.

## Project structure

```
src/
  client/          React dashboard UI (app.jsx, app.css, services)
  fluent/
    tables/        Table definitions (time entries)
    records/       Sample data
    ui-pages/      Dashboard UI page registration
    generated/     SDK generated metadata (keys, form layout)
now.config.json    App scope and name
package.json       Dependencies and SDK scripts
```

## License

UNLICENSED. Internal use.
