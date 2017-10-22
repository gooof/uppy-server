// checks if uppy-server is authorized to access a user's
// provider account.
// TODO: this function seems uneccessary. Might be better to just
// have this as a middleware that is used for all auth required routes.
function authorized ({ params, uppyProviderTokens, uppyProvider }, res) {
  const providerName = params.providerName

  if (!uppyProviderTokens || !uppyProviderTokens[providerName]) {
    return res.json({ authenticated: false })
  }

  const token = uppyProviderTokens[providerName]
  uppyProvider.list({ token }, (err, response, body) => {
    const notAuthenticated = Boolean(err)
    return res.json({ authenticated: !notAuthenticated })
  })
}

exports = module.exports = authorized
