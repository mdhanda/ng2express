/**
 * Created by Manu on 3/6/2016.
 */
System.config({
    defaultJSExtensions: true,
    paths: {
        'rxjs/operator/*' : './rxjs/add/operator/*',
        'semantic-ui/dist/components/*': 'semantic/dist/components/*.js',
        '*': './*'
    },
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js',
        }
    }
});