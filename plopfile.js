module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'this will help you generate a component',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'What is your component name? (use lowercase and dash, e.g. top-bar)',
			validate: function (value) {
				if ((/.+/).test(value)) { return true; }
				return 'name is required';
			}
		}],
		actions: function(data) {
			const actions = [];

			const componentPath = 'src/components/';
			const componentTemplatePath = 'plop-templates/component/';
			const componentName = 'component';

			if(data.name) {
				actions.push({
					type: 'add',
					path: componentPath + '{{dashCase name}}/index.vue',
					templateFile: componentTemplatePath + 'index.vue'
                });
                
                actions.push({
					type: 'add',
					path: componentPath + '{{dashCase name}}/{{dashCase name}}.'+ componentName +'.ts',
					templateFile: componentTemplatePath + componentName + '.ts'
                });
                
                actions.push({
					type: 'add',
					path: componentPath + '{{dashCase name}}/{{dashCase name}}.' + componentName + '.scss',
					templateFile: componentTemplatePath  + componentName + '.scss'
                });
                
                actions.push({
					type: 'add',
					path: componentPath + '{{dashCase name}}/{{dashCase name}}.'+ componentName + '.pug',
					templateFile: componentTemplatePath + componentName + '.pug'
				});
			}

			return actions;
		}
	});
};