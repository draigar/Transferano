<template>
  <div class="tw-bg-gray-4">
    <a-modal
      v-model="visible"
      :bodyStyle="{ backgroundColor: 'transparent', borderRadius: 20 }"
      :width="500"
      :footer="null"
    >
      <div
        class="tw-h-full tw-flex tw-flex-col tw-bg-white tw-rounded-lg tw-py-8"
      >
      <a-alert
        v-if="failedLogin"
        message="Login Error"
        description="We could not log you in, do try again"
        type="error"
        closable
      />
        <div class="tw-w-full tw-px-8 tw-flex tw-justify-center tw-mb-4">
          <img src="icons/authBoy.svg" style="width: 120px" />
        </div>
        <form @submit.prevent="submit">
          <div
            class="
              tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-col
            "
          >
            <h1
              style="font-weight: 600; font-size: 25px"
              class="tw-p-0 tw-m-0 tw-font-nunito"
            >
              Welcome Back
            </h1>
            <p
              class="tw-p-0"
              style="font-weight: 400; font-size: 16px; line-height: 27px"
            >
              Let's start with your email
            </p>
            <a-button
              class="
                tw-bg-wite
                tw-shadow-lg
                tw-flex
                tw-items-center
                tw-justify-center
              "
              type="button"
              style="width: 315px; height: 40px"
              size="large"
              @click="loginWith('google')"
            >
              <a-icon type="google" class="tw-px-4" /> Login with Google
            </a-button>
            <span class="tw-text-sm tw-py-4">OR</span>
            <div v-if="!sentLink" style="width: 315px">
              <label class="">Email:</label>
              <a-input
                placeholder="e.g damishow@transferano.com"
                class="tw-w-full tw-shadow-sm tw-mt-2"
                style="height: 40px"
                v-model="email"
              />
            </div>
            <div v-else style="width: 315px">
              <label class="">Verification code:</label>
              <a-input
                placeholder="6 digit code sent to your email"
                class="tw-w-full tw-shadow-sm tw-mt-2"
                style="height: 40px"
                v-model="code"
              />
            </div>
            <a-button
              class="
                tw-bg-wite
                tw-shadow-lg
                tw-flex
                tw-items-center
                tw-justify-center
                tw-bg-primary
                tw-text-white
                tw-mt-4
              "
              :loading="isEmailLoading"
              v-if="!sentLink"
              style="width: 315px; height: 40px"
              size="large"
              @click="submit"
            >
              Request code
            </a-button>
            <a-button
              v-else
              class="
                tw-bg-wite
                tw-shadow-lg
                tw-flex
                tw-items-center
                tw-justify-center
                tw-bg-primary
                tw-text-white
                tw-mt-4
              "
              :loading="isCodeLoading"
              style="width: 315px; height: 40px"
              size="large"
              @click="submit"
            >
              Verify & login
            </a-button>
          </div>
        </form>
      </div>
    </a-modal>
  </div>
</template>
<script>
import Auth0 from 'auth0-js'
import {mapState} from 'vuex';
export default {
  data() {
    return {
      visible: false,
      email: '',
      code: '',
      sentLink: false,
      isEmailLoading: false,
      isCodeLoading: false,
    }
  },
  computed: mapState("auth", ["failedLogin"]),
  beforeDestroy() {
    this.$nuxt.$off()
  },
  mounted() {
    if (this.failedLogin) {
      this.visible = true
    }
    this.$nuxt.$on('openModal', (val) => {
      this.visible = val
    })
  },
  methods: {
    showModal() {
      this.visible = true
    },
    loginWith(sso) {
      if (sso === 'google') {
        this.$auth.loginWith('google')
        .then((r) => {
          console.log(r);
        })
        .catch((e) => {
          console.log(e);
        })
      }
    },
    handleOk(e) {
      console.log(e)
      this.visible = false
    },
    submitEmail(auth0) {
      this.isEmailLoading = true
      auth0.passwordlessStart(
        {
          connection: 'email',
          send: 'code',
          email: this.email,
        },
        (err, res) => {
          if (res) {
            const { emailVerified } = res
            if (!emailVerified) {
              this.sentLink = true
            }
            this.isEmailLoading = false
            console.log('====================================')
            console.log(res)
            console.log('====================================')
          } else {
            this.isEmailLoading = false
            console.log('====================================')
            console.log('An error occurred', err)
            console.log('====================================')
          }
        }
      )
    },
    submitCode(auth0) {
      this.isCodeLoading = true
      auth0.passwordlessLogin(
        {
          connection: 'email',
          email: this.email,
          verificationCode: this.code,
        },
        (err, res) => {
          // handle errors or continue
          if (res) {
            const { emailVerified } = res
            this.isCodeLoading = false

            console.log('====================================')
            console.log(res)
            console.log('====================================')
          } else {
            this.isCodeLoading = false
            console.log('====================================')
            console.log('An error occurred', err)
            console.log('====================================')
          }
        }
      )
    },
    submit(e) {
      e.preventDefault();
      const auth0 = new Auth0.WebAuth({
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.CLIENT_ID,
        redirectUri: 'http://localhost:3050/auth/signed-in',
        responseType: 'token',
      })
      if (!this.sentLink) {
        this.submitEmail(auth0)
      } else {
        this.submitCode(auth0)
      }
    },
  },
}
</script>

<style scoped>
.auth {
  height: 500px;
  background-color: #e5e5e5;
}
</style>