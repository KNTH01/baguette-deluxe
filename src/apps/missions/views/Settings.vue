<template>
  <div>
    <h1 class="my-4 text-xl">Settings</h1>

    <p>
      Yo soy
      <span class="text-lg font-semibold">
        {{ profile.name }}
      </span>
    </p>
    <pre class="font-mono">
                                .-""""-.
                              / j      \
                              :.d;       ;
                              $$P        :
                  .m._       $$         :
                  dSMMSSSss.__$$b.    __ :
                :MMSMMSSSMMMSS$$$b  $$P ;
                SMMMSMMSMMMSSS$$$$     :b
                dSMMMSMMMMMMSSMM$$$b.dP SSb.
              dSMMMMMMMMMMSSMMPT$$=-. /TSSSS.
              :SMMMSMMMMMMMSMMP  `$b_.'  MMMMSS.
              SMMMMMSMMMMMMMMM \  .'\    :SMMMSSS.
            dSMSSMMMSMMMMMMMM  \/\_/; .'SSMMMMSSSm
            dSMMMMSMMSMMMMMMMM    :.;'" :SSMMMMSSMM;
          .MMSSSSSMSSMMMMMMMM;    :.;   MMSMMMMSMMM;
        dMSSMMSSSSSSSMMMMMMM;    ;.;   MMMMMMMSMMM
        :MMMSSSSMMMSSP^TMMMMM     ;.;   MMMMMMMMMMM
        MMMSMMMMSSSSP   `MMMM     ;.;   :MMMMMMMMM;
        "TMMMMMMMMMM      TM;    :`.:    MMMMMMMMM;
          )MMMMMMM;     _/\\    :`.:    :MMMMMMMM
          d$SS$$$MMMb.  |._\\\   :`.:     MMMMMMMM
          T$$S$$$$$$$$$$m;O\\\\"-;`.:_.-  MMMMMMM;
        :$$$$$$$$$$$$$$$b_l./\\ ;`.:    mMMSSMMM;
        :$$$$$$$$$$$$$$$$$$$./\\;`.:  .$$MSMMMMMM
          $$$$$$$$$$$$$$$$$$$$. \\`.:.$$$$SMSSSMMM;
          $$$$$$$$$$$$$$$$$$$$$. \\.:$$$$$SSMMMMMMM
          :$$$$$$$$$$$$$$$$$$$$$.//.:$$$$SSSSSSSMM;
          :$$$$$$$$$$$$$$$$$$$$$$.`.:$$SSSSSSSMMMP
          $$$$$$$$$;"^$J "^$$$$;.`.$$P  `SSSMMMM
          :$$$$$$$$$       :$$$;.`.P'..   TMMM$$b
          :$$$$$$$$$;      $$$$;.`/ c^'   d$$$$$S;
          $$$$$S$$$$;      '^^^:_d$g:___.$$$$$$SSS
          $$$$SS$$$$;            $$$$$$$$$$$$$$SSS;
          :$$$SSSS$$$$            : $$$$$$$$$$$$$SSS
          :$P"TSSSS$$$            ; $$$$$$$$$$$$$SSS;
          j    `SSSSS$           :  :$$$$$$$$$$$$$SS$
        :       "^S^'           :   $$$$$$$$$$$$$S$;
        ;.____.-;"               "--^$$$$$$$$$$$$$P
        '-....-"                       ""^^T$$$$P"
      </pre
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IfcPerson } from '@/store/ifc';
import EditMission from '@/apps/missions/components/EditMission.vue';

@Component({
  components: {
    EditMission,
  },
})
export default class Settings extends Vue {
  get profile(): IfcPerson | null {
    return this.$store.state.profile;
  }
}
</script>

<style lang="scss" scoped></style>
