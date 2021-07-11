import RibozillaExtension, { Categories, ParamsTypes, InputTypes, RequiredTypes } from '../../../packages/ribozilla-clui-api/lib'

const ext = new RibozillaExtension('DCC - single strand', '2.7.9a')

ext.command('DCC')
  .category(Categories.OTHER)
  .param(ParamsTypes.ARG, '@samplesheet', 'Samplesheet', -1, [[InputTypes.FILE]], RequiredTypes.MAIN_IN)
  .param(ParamsTypes.FLAG, '-mt1', 'Mate 1', 1, [[InputTypes.FILE]], RequiredTypes.MAIN_IN)
  .param(ParamsTypes.FLAG, '-D', 'Detect circRNA', 0, [[InputTypes.BOOLEAN]])
  .param(ParamsTypes.FLAG, '-M', 'Filter Mitochondrial Candidates', 0, [[InputTypes.BOOLEAN]])
  .param(ParamsTypes.FLAG, '-R', 'Repeats Annotations', -1, [[InputTypes.FILE]], RequiredTypes.MAIN_IN)
  .param(ParamsTypes.FLAG, '-Nr', 'Replicates (min,max)', 2, [
    [InputTypes.NUMBER],
    [InputTypes.NUMBER]
  ])
  .end()

ext.generateExtension('dcc', __dirname)
