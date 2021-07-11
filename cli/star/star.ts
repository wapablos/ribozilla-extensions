import RibozillaExtension, { Categories, ParamsTypes, InputTypes, RequiredTypes } from '../../../packages/ribozilla-clui-api/lib'

const ext = new RibozillaExtension('STAR', '2.7.9a')

ext.command('STAR')
  .category(Categories.GENOME_INDEX)
  .param(ParamsTypes.FLAG, '--runThreadN', 'Threads', 1, [[InputTypes.NUMBER]])
  .param(ParamsTypes.FLAG, '--runMode', 'Task mode', 0, [[InputTypes.ENUM, ['genomeGenerate']]])
  .param(ParamsTypes.FLAG, '--genomeDir', 'Genome Index', -1, [[InputTypes.DIR]], RequiredTypes.MAIN_OUT)
  .param(ParamsTypes.FLAG, '--genomeFastaFiles', 'Read files', -1, [[InputTypes.FILE]], RequiredTypes.MAIN_IN)
  .param(ParamsTypes.FLAG, '--sjdbGTFfile', 'Annotation', 1, [[InputTypes.FILE]], RequiredTypes.MAIN_IN)
  .param(ParamsTypes.ARG, '--sjdbOverhang', 'Read Length', 1, [[InputTypes.NUMBER, ['99']]], RequiredTypes.MAIN_OUT)
  .end()

ext.generateExtension('star', __dirname)
