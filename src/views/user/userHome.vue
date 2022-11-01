<template>
  <div class="userHome">
    <h1>userHome</h1>
    <div ref="diff" class="diff"></div>
  </div>
</template>
<script>
import * as monaco from "monaco-editor"

export default {
  name: 'userHome',
  components: {
    
  },
  data() {
    return {
      lhsData: null,
      rhsData: null,
      diffEditor: {},
    }
  },
  methods: {
    mainClick: function () {
      console.log(123)
    },
    onProgress() {
      // eslint-disable-next-line
      this.lhsData = `CREATE TABLE dbo.EmployeePhoto
(
    EmployeeId INT NOT NULL PRIMARY KEY,
    Photo VARBINARY(MAX) FILESTREAM NULL,
    MyRowGuidColumn UNIQUEIDENTIFIER NOT NULL ROWGUIDCOL
                    UNIQUE DEFAULT NEWID()
);`;
      this.rhsData = `CREATE TABLE dbo.EmployeePhoto
(
    EmployeeId INT NOT NULL PRIMARY KEY,
    Photo VARBINARY(MAXLengh) FILESTREAM NULL,
    MyRowGuidColumn UNIQUEIDENTIFIER NOT NULL ROWGUIDCOL
                    UNIQUE DEFAULT NEWID()
);`;
      this.diffEditor = monaco.editor.createDiffEditor(this.$refs["diff"], {
        enableSplitViewResizing: false,
        renderOverviewRuler: null,
        readOnly: true
      });
      var lhsModel = monaco.editor.createModel(this.lhsData, 'sql');
      var rhsModel = monaco.editor.createModel(this.rhsData, 'sql');
      this.diffEditor.setModel({
        original: lhsModel,
        modified: rhsModel
      });
    },
  },
  mounted() {
    this.onProgress()
    window.onresize = () => {
      if (this.diffEditor) {
        this.diffEditor.layout();
      }
    };
  },
}
</script>
<style lang="less" scoped>
.diff{
  width: 100%;
  height: 400px;
}
</style>