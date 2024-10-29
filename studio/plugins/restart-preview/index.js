import React, { useEffect, useState } from "react";
import { DashboardWidget } from "@sanity/dashboard";
import { Button, Flex, Card, Text } from "@sanity/ui";

function RestartPreview() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)


  function handleClick() {
    console.log('restarting')
    setLoading(true)
    setTimeout(() => setLoading(false), 10000);
  }

  function refresh() {
    fetch('https://webhook.gatsbyjs.com/hooks/data_source/d8ee9f22-ba24-4376-93b0-2ff263501bf3', { method: 'POST' })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(e => console.log(e))
    handleClick()
  }

  return (
    <DashboardWidget
    >
      {error && (
        <Card paddingX={3} paddingY={4} tone="critical">
          {error}
        </Card>
      )}
      {!error && (
        <Flex direction="column" align="stretch" style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          {!loading && <Button
            flex={1}
            paddingX={2}
            paddingY={4}
            mode="bleed"
            tone="primary"
            text="Restart Deploy Preview"
            loading={loading}
            onClick={() => refresh()}
          />}
          {loading && <Text style={{ textAlign: 'center', padding: '1.25rem 0' }}>Restarting....</Text>}
        </Flex>
      )}
    </DashboardWidget>
  );
}

export default {
  name: "restart-preview",
  component: RestartPreview,
};
