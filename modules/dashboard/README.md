### POS Dashboard is Administration panel for POS ###

List of features:

* user management, roles

### Installation ###

#### dependencies
Dashboard modules has two dependencies, please install them first
* utils
* signup

install as module to modules/ directory of your projcet

### Enabling features
* Google analytics - make sure to include partial in your frontend layout or desired pages:

```
{% include "modules/dashboard/google_analytics" %}
```

### Useage

After installation go do `/sign-up` path in your website and create first user.

Then create and execute migration to give administrative access to your user:

```
{% assign email = [YOUR_USER_EMAIL] %}
{% query_graph "modules/dashboard/get_users", email: email %}
{% assign user_id = g.users.results.first.id %}
{% execute_query "modules/dashboard/create_first_admin", id: user_id %}
```

Log in as your adminstrator and enjoy your dashboard.

### Contribution guidelines ###

`git submodule add git@bitbucket.org:lemingos/pos-dashboard.git modules/dashboard`

### Who do I talk to? ###

* Repo owner or admin
